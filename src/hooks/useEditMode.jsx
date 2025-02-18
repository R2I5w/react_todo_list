import { useState } from 'react';

export const useEditMode = () => {
        const [editingId, setEditingId] = useState(null);
        const [editText, setEditText] = useState('');

        const startEdit = (todo) => {
                setEditingId(todo.id);
                setEditText(todo.text);
        };

        const cancelEdit = () => {
                setEditingId(null);
                setEditText('');
        };

        return {
                editingId,
                editText,
                setEditText,
                startEdit,
                cancelEdit
        };
};
