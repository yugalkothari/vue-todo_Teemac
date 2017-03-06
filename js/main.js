window.onload = function() {
    var todocomponent = Vue.extend({
        data: function() {
            return {
                inEditMode: false
            }
        },
        props: ['task'],
        template: '<div><span :class="{ taskDone: task.done }" v-on:click="clicked" v-show="!inEditMode">{{task.name}}</span><textarea  style="max-width=40px;" height="600" class="form-control" v-on:keyup.enter="saved" v-model="task.name" v-show="inEditMode"/></div>',
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
            displayAddTasks: true,
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
            }

        }
       
    });
}