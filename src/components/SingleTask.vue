<template>
    <li>
        {{ task }}
        <button @click="deleteTask(id)">x</button>
    </li>
</template>

<script>
export default {
    props: ['id', 'task'],
    methods: {
        deleteTask(id) {
            if ( confirm("Are you sure?" ) ) {
                this.$store.dispatch('deleteTask', { id: id });
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