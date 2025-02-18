import { memo, useState, useCallback } from 'react';
import Button from '../atoms/Button';
import Checkbox from '../atoms/Checkbox';
import Input from '../atoms/Input';
import { useTodoDispatch } from '../../contexts/TodoContext';

const TodoItem = memo(({ todo }) => {
        const [isEditing, setIsEditing] = useState(false);
        const [editText, setEditText] = useState(todo.text);
        const dispatch = useTodoDispatch();

        const handleToggle = useCallback(() => {
                dispatch({ type: 'TOGGLE_TODO', id: todo.id });
        }, [dispatch, todo.id]);

        const handleDelete = useCallback(() => {
                if (window.confirm('本当によろしいですか？')) {
                        dispatch({ type: 'DELETE_TODO', id: todo.id });
                }
        }, [dispatch, todo.id]);

        const handleEdit = useCallback(() => {
                setIsEditing(true);
                setEditText(todo.text);
        }, [todo.text]);

        const handleSaveEdit = useCallback(() => {
                if (!editText.trim()) return;
                dispatch({ type: 'UPDATE_TODO', id: todo.id, text: editText });
                setIsEditing(false);
        }, [dispatch, editText, todo.id]);

        const handleEditChange = useCallback((e) => {
                setEditText(e.target.value);
        }, []);

        return (
                <li style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        marginBottom: '10px',
                        backgroundColor: 'white',
                }}>
                        <Checkbox
                                checked={todo.completed}
                                onChange={handleToggle}
                        />

                        {isEditing ? (
                                <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
                                        <Input
                                                value={editText}
                                                onChange={handleEditChange}
                                        />
                                        <Button
                                                variant="success"
                                                onClick={handleSaveEdit}
                                        >
                                                保存
                                        </Button>
                                </div>
                        ) : (
                                <span style={{
                                        flex: 1,
                                        textDecoration: todo.completed ? 'line-through' : 'none',
                                        color: todo.completed ? '#6c757d' : 'black',
                                }}>
                                        {todo.text}
                                </span>
                        )}

                        <div style={{ display: 'flex', gap: '5px' }}>
                                {!isEditing && (
                                        <Button
                                                variant="secondary"
                                                onClick={handleEdit}
                                        >
                                                編集
                                        </Button>
                                )}
                                <Button
                                        variant="danger"
                                        onClick={handleDelete}
                                >
                                        削除
                                </Button>
                        </div>
                </li>
        );
});

TodoItem.displayName = 'TodoItem';

export default TodoItem;
