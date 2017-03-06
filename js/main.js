window.onload = function() {
    var todocomponent = Vue.extend({
        data: function() {
            return {
                inEditMode: false
            }
        },
        props: ['task'],
        template: '<div><span :class="{ taskDone: task.done }" v-on:click="clicked" v-show="!inEditMode">{{task.name}}</span><textarea  style="max-width=40px;" height="600"autofocus class="form-control" v-on:blur="saved" v-on:keyup.enter="saved" v-model="task.name" v-show="inEditMode"/></div>',
        methods: {
            clicked: function() {
                this.inEditMode = true;

            },
            saved: function() {
                this.inEditMode = false;

            },

        }

    });

    Vue.component('todo', todocomponent);

    let todoApp = new Vue({
        el: '#app',
        data: {
            displayTasks: true,
            displayProgressBar: true,
            displayAddTasks: true,
            displayTaskStatistics: true,
            displayedTasksStat: 'totalTasks',
            tasks: [{
                    name: "add edit feature",
                    done: true
                },
                {
                    name: "change ui",
                    done: true
                },
                {
                    name: "add bootstrap",
                    done: true
                },

                {
                    name: "fix bugs",
                    done: true
                },
                {
                    name: "add task status",
                    done: true
                },
                {
                    name: "add dragula.js",
                    done: false
                },
				{
                    name: "implement dragula js",
                    done: false
                },
				{
                    name: "remove dragula js",
                    done: false
                },
				{
                    name: "add sortable js",
                    done: false
                },
				{
                    name: "implement sortable js",
                    done: false
                },
				{
                    name: "change ui again",
                    done: false
                },

            ]
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
            },
            changeTotalTasks: function() {
                this.displayedTasksStat = 'totalTasks';
            },
            changeLeftToDo: function() {
                this.displayedTasksStat = 'leftToDo';
            },
            changeCheckMarked: function() {
                this.displayedTasksStat = 'checkMarked';
            }

        },
        computed: {
            checkMarkedTasks: function() {
                let count = 0;
                for (let i = 0; i < this.tasks.length; ++i) {
                    if (this.tasks[i].done == true) {
                        count++;
                    }
                }
                return count;
            },
            leftToDo: function() {
                return this.tasks.length - this.checkMarkedTasks;
            },
            displayedTasksStatView: function() {
                if (this.displayedTasksStat == 'totalTasks') {
                    return 'Total Tasks: ' + this.tasks.length;
                } else if (this.displayedTasksStat == 'leftToDo') {
                    return 'Tasks Left: ' + this.leftToDo;
                } else if (this.displayedTasksStat == 'checkMarked') {
                    return 'Check Marked Tasks: ' + this.checkMarkedTasks;
                } else if (this.displayedTasksStat == 'deletedTasks') {
                    return 'Deleted Tasks: ' + this.deletedTasks;
                }
            },
            manageable: function() {
                if (this.leftToDo < 5) {
                    return 'green';
                } else {
                    return 'red';
                }
            },
            percentageOfTasksCompleted: function() {
                if (this.tasks.length == 0) {
                    return 0;
                } else {
                    return (this.checkMarkedTasks / this.tasks.length) * 100;
                }
            }
        }
    });
}