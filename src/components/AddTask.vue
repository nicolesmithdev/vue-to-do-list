<template>    
    <div class="task-form">
      <h2>Add Task</h2>
      <form @submit.prevent="addTask">
        <input type="text" placeholder="New task" ref="task" />
        <button>Add Task</button>
      </form>
    </div>
</template>

<script>
export default {
    methods: {
        addTask() {
            const task = this.$refs.task.value;
            if (task.trim() != '' ) {
                this.$store.dispatch('addTask', { task: task });
                this.$refs.task.value = '';
            } else {
                alert("Field cannot be empty");
            }
        }
    }
}
</script>

<style scoped>
input {
    margin-bottom: 2rem;
}
</style>