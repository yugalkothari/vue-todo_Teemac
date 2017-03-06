window.onload = function() {let todoApp = new Vue({
    el: '#app',
    data: {
      displayTasks: true,
      displayAddTasks: true,
      tasks: []
    },
    methods: {
      
      addTask: function(event) {
        event.preventDefault();
        
        if (this.tasks.name !== '' && this.tasks.name !== undefined) {
          this.tasks.push({
            name: this.tasks.name,
            done: false,
          });
        }
      },
      deleteTask: function(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        this.deletedTasks++;
      }
	  }

  });
}