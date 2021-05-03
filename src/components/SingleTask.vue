<template>
    <li>
        {{ task }}
        <button @click="deleteTask(id)">x</button>
    </li>
</template>

<script>
export default {
    emits: ['delete-task'],
    props: ['id', 'task'],
    methods: {
        deleteTask(id) {
            if ( confirm("Are you sure?" ) ) {
                this.$emit('delete-task', id);
            }
        }
    }
}
</script>

<style scoped>
li {
    position: relative;
    overflow: hidden;
}

li button {
    background-color: none;
    position: absolute;
    right: 0;
    top: 0;
}

li button:hover {
    background-color: white;
    color: #FB607F;
}
</style>