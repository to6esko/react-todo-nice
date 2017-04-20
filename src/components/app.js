import React from 'react';
import TodoList from './todo-list';
import CreateTodo from './create-todo';


const todos = [
    {
        id:1,
        task: 'React create todos.',
        isCompleted: false
    },
    {
        id:2,
        task: 'Aother todo.',
        isCompleted: true
    }
];

export default class App extends React.Component{
    constructor(props) {
        super(props);

        this.state = { todos };
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({
            todos: this.state.todos
        });
    }
    

    saveTask(oldTask, newTask) {
        const foundTask = _.find(this.state.todos, todo =>
            todo.task === oldTask);
        foundTask.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo =>
            todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }


    toggleTask(task) {
        const foundTask = _.find(this.state.todos, todo =>
            todo.task === task);
        foundTask.isCompleted = !foundTask.isCompleted;
        this.setState({ todos: this.state.todos });
    }
    render() {
        return (
            <div>
                <h1>React Todo List</h1>
                <CreateTodo todos={this.state.todos}
                    createTask={this.createTask.bind(this) } />
                <br/>
                <TodoList
                    todos={this.state.todos}
                    saveTask={this.saveTask.bind(this) }
                    deleteTask={this.deleteTask.bind(this) }
                    toggleTask={this.toggleTask.bind(this)}/>
                </div>
        )
    }
}