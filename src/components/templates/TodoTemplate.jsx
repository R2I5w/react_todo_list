import { memo } from 'react';
import TodoForm from '../molecules/TodoForm';
import TodoList from '../organisms/TodoList';
import TodoStats from '../molecules/TodoStats';

const TodoTemplate = memo(({
        todos,
        stats
}) => {
        const containerStyle = {
                maxWidth: '600px',
                margin: '0 auto',
                padding: '20px',
        };

        const titleStyle = {
                textAlign: 'center',
                marginBottom: '20px',
        };

        return (
                <div style={containerStyle}>
                        <h1 style={titleStyle}>ToDo List</h1>

                        <TodoStats {...stats} />
                        <TodoForm />
                        <TodoList todos={todos} />
                </div>
        );
});

TodoTemplate.displayName = 'TodoTemplate';

export default TodoTemplate;
