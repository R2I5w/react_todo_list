import { memo, useMemo } from 'react';
import TodoTemplate from '../templates/TodoTemplate';
import { TodoProvider, useTodoContext } from '../../contexts/TodoContext';

const TodoContent = memo(() => {
        const todos = useTodoContext();

        const stats = useMemo(() => ({
                total: todos.length,
                completed: todos.filter(todo => todo.completed).length,
                incomplete: todos.length - todos.filter(todo => todo.completed).length
        }), [todos]);

        return (
                <div style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        padding: '20px',
                }}>
                        <TodoTemplate
                                todos={todos}
                                stats={stats}
                        />
                </div>
        );
});

TodoContent.displayName = 'TodoContent';

const TodoPage = () => {
        return (
                <TodoProvider>
                        <TodoContent />
                </TodoProvider>
        );
};

export default TodoPage;
