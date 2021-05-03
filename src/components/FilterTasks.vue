<template>
    <div class="filter-tasks">
        <input type="text" placeholder="Filter tasks" @input="filterTasks" v-model="enteredInput" />
    </div>
</template>

<script>
export default {
    emits: ['filter-tasks'],
    data() {
        return {
            enteredInput: ''
        };
    },
    methods: {
        filterTasks() {
            this.$emit('filter-tasks', this.enteredInput);
        }
    }
}
</script>

<style scoped>
.filter-tasks {
    margin-bottom: 2rem;
}
</style>