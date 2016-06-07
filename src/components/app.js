import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [
    {
        task: 'make React tutorial',
        isCompleted: false
    },
    {
        task: 'eat dinner',
        isCompleted: true
    }
]

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todos };
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }


    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo =>
            todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    render() {
        return (
            <div>
                <h1>React todo list</h1>
                <CreateTodo createTask={this.createTask.bind(this) }/>
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this) }/>
            </div>
        );
    }
}