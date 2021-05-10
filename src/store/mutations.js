export default {
    setTasks(state, payload) {
        state.tasks = payload.tasks;
    },
    addTask(state, payload) {
        state.tasks.push({
            id: new Date().toISOString(),
            task: payload.task
        });
    },
    deleteTask(state, payload) {
        const index = state.tasks.findIndex(task => task.id === payload.id);
        state.tasks.splice(index, 1);
    },
    clearTasks(state) {
        state.tasks = [];
    },
    saveTasks(state) {
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
};