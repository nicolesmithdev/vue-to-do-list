export default {
    setTasks({commit}, payload) {
        commit('setTasks', payload);
    },
    addTask({commit}, payload) {
        commit('addTask', payload);
        commit('saveTasks', payload);
    },
    deleteTask({commit}, payload) {
        commit('deleteTask', payload);
        commit('saveTasks', payload);
    },
    clearTasks({commit}) {
        commit('clearTasks');
        commit('saveTasks');
    }
};