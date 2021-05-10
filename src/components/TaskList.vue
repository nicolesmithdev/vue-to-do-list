<template>
    <div class="task-list">
        <h2>Task List</h2>
        <filter-tasks @filter-tasks="filterTasks"></filter-tasks>
        <ul>
            <single-task 
                v-for="task in tasks" 
                :key="task.id"
                :id="task.id"
                :task="task.task"
            ></single-task>
        </ul>
        <button @click="clearTasks">Clear Tasks</button>
    </div>
</template>

<script>
import FilterTasks from './FilterTasks';
import SingleTask from './SingleTask';

export default {
    components: {
        FilterTasks,
        SingleTask
    },
    props: ['tasks'],
    emits: ['filter-tasks'],
    methods: {
        clearTasks() {
            if ( confirm("Are you sure?") ) {
                this.$store.dispatch('clearTasks');
            }
        },
        filterTasks(value) {
            this.$emit('filter-tasks', value);
        }
    }
}
</script>

<style scoped>
ul {
    border: 1px solid #e0e0e0;
    list-style: none;
    margin: 0 0 2rem;
    padding: 0;
}

li {
    background-color: #FB607F;
    border-bottom: 1px solid #e0e0e0;
    color: white;
    line-height: 1.5rem;
    margin: 0;
    padding: 1rem;
}

button:not(:hover) {
    background-color:black;
}
</style>