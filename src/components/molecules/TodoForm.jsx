import { memo, useState, useCallback } from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { useTodoDispatch } from '../../contexts/TodoContext';

const TodoForm = memo(() => {
        const [value, setValue] = useState('');
        const dispatch = useTodoDispatch();

        const handleChange = useCallback((e) => {
                setValue(e.target.value);
        }, []);

        const handleSubmit = useCallback((e) => {
                e.preventDefault();
                if (!value.trim()) return;

                dispatch({ type: 'ADD_TODO', text: value });
                setValue('');
        }, [value, dispatch]);

        return (
                <form onSubmit={handleSubmit} style={{
                        display: 'flex',
                        gap: '10px',
                        marginBottom: '20px',
                }}>
                        <div style={{ flex: 1 }}>
                                <Input
                                        value={value}
                                        onChange={handleChange}
                                        placeholder="新しいタスクを入力"
                                />
                        </div>
                        <Button type="submit">
                                保存
                        </Button>
                </form>
        );
});

TodoForm.displayName = 'TodoForm';

export default TodoForm;
