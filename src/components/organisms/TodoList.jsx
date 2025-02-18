import { memo } from 'react';
import TodoItem from '../molecules/TodoItem';

const TodoList = memo(({ todos }) => {
        const style = {
                listStyle: 'none',
                padding: 0,
                margin: 0,
        };

        return (
                <ul style={style}>
                        {todos.map(todo => (
                                <TodoItem
                                        key={todo.id}
                                        todo={todo}
                                />
                        ))}
                </ul>
        );
});

TodoList.displayName = 'TodoList';

export default TodoList;
