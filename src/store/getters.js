export default {
    tasks(state) {
        return state.tasks;
    },
    hasTasks(state) {
        return state.tasks && state.tasks.length > 0;
    }
};