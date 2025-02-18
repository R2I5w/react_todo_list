import { useState } from 'react';

export const useTodos = () => {
        const [todos, setTodos] = useState([]);

        const addTodo = (text) => {
                if (!text.trim()) return;

                setTodos(prevTodos => [
                        ...prevTodos,
                        {
                                id: Date.now(),
                                text: text.trim(),
                                completed: false
                        }
                ]);
        };

        const toggleTodo = (id) => {
                setTodos(prevTodos =>
                        prevTodos.map(todo =>
                                todo.id === id ? { ...todo, completed: !todo.completed } : todo
                        )
                );
        };

        const updateTodo = (id, newText) => {
                if (!newText.trim()) return;

                setTodos(prevTodos =>
                        prevTodos.map(todo =>
                                todo.id === id ? { ...todo, text: newText.trim() } : todo
                        )
                );
        };

        const deleteTodo = (id) => {
                if (window.confirm('本当によろしいですか？')) {
                        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
                }
        };

        return {
                todos,
                addTodo,
                toggleTodo,
                updateTodo,
                deleteTodo
        };
};
