<template>
  <div class="container">
    <add-task @new-task="addTask"></add-task>
    <task-list 
      v-if="hasTasks" 
      :tasks="filteredTasks"
      @clear-tasks="clearTasks"
      @delete-task="deleteTask"
      @filter-tasks="filterTasks"
    ></task-list>
  </div>
</template>

<script>
import AddTask from './components/AddTask.vue';
import TaskList from './components/TaskList';

export default {
  components: {
    AddTask,
    TaskList
  },
  data() {
    return {
      filterQuery: null,
      tasks: []
    };
  },
  computed: {
    hasTasks() {
      return this.tasks.length > 0;
    },
    filteredTasks() {
      return this.filterQuery ? this.tasks.filter(task => task.task.toLowerCase().includes(this.filterQuery.toLowerCase())) : this.tasks;
    }
  },
  beforeMount() {
    if ( localStorage.getItem('tasks') ) {
      this.tasks = JSON.parse(localStorage.getItem('tasks'));
    }
  },
  methods: {
    addTask(value) {
      this.tasks.push({
        id: new Date().toISOString(),
        task: value
      });
      this.saveTasks();
    },
    clearTasks() {
      this.tasks = [];
      this.saveTasks();
    },
    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        this.tasks.splice(index, 1);
        this.saveTasks();
    },
    saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    },
    filterTasks(value) {
      this.filterQuery = value.trim();
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.45rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h2 {
  font-family: "Helvetica Neue", sans-serif;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
  margin: 0 0 2rem;
}

input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #9E9E9E;
  border-radius: 0;
  font-size: 1.4rem;
  height: 3rem;
  margin: 0 0 0.5rem;
  outline: none;
  padding: 2rem 1rem;
  width: 100%;
}

button {
  background-color: #FB607F;
  border: none;
  color: white;
  cursor: pointer;
  height: 3.6rem;
  padding: 0 1.6rem;
  text-align: center;
  text-transform: uppercase;
}

button:hover {
  background-color: #9E9E9E;
}

.container {
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.2);
  margin: 4rem auto;
  max-width: 768px;
  width: 90%;
}

.container > div:not(:last-child) {
  border-bottom: 1px solid rgba(160,160,160,0.2);
}

.container > div {
  padding: 3rem;
}
</style>