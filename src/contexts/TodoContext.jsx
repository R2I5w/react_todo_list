import { createContext, useContext, useReducer, useMemo } from 'react';

const TodoContext = createContext(null);
const TodoDispatchContext = createContext(null);

const todoReducer = (state, action) => {
        switch (action.type) {
                case 'ADD_TODO':
                        return [...state, {
                                id: Date.now(),
                                text: action.text.trim(),
                                completed: false
                        }];
                case 'TOGGLE_TODO':
                        return state.map(todo =>
                                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                        );
                case 'UPDATE_TODO':
                        return state.map(todo =>
                                todo.id === action.id ? { ...todo, text: action.text.trim() } : todo
                        );
                case 'DELETE_TODO':
                        return state.filter(todo => todo.id !== action.id);
                default:
                        throw new Error(`Unhandled action type: ${action.type}`);
        }
};

export const TodoProvider = ({ children }) => {
        const [todos, dispatch] = useReducer(todoReducer, []);

        const contextValue = useMemo(() => todos, [todos]);

        return (
                <TodoContext.Provider value={contextValue}>
                        <TodoDispatchContext.Provider value={dispatch}>
                                {children}
                        </TodoDispatchContext.Provider>
                </TodoContext.Provider>
        );
};

export const useTodoContext = () => {
        const context = useContext(TodoContext);
        if (context === null) {
                throw new Error('useTodoContext must be used within a TodoProvider');
        }
        return context;
};

export const useTodoDispatch = () => {
        const context = useContext(TodoDispatchContext);
        if (context === null) {
                throw new Error('useTodoDispatch must be used within a TodoProvider');
        }
        return context;
};
