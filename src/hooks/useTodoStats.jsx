export const useTodoStats = (todos) => {
        const totalTasks = todos.length;
        const completedTasks = todos.filter(todo => todo.completed).length;
        const incompleteTasks = totalTasks - completedTasks;

        return {
                totalTasks,
                completedTasks,
                incompleteTasks
        };
};
