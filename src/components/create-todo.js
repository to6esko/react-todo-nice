import React from 'react';


export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }


    renderError() {
        if (!this.state.error) {
            return null;
        }
        return <div style={{ color: 'red' }}>{this.state.error}</div>
    }

    validateInput(task) {
        if (!task) {
            return "Please enter a task."
        } else if (_.find(this.props.todos, todo =>
            todo.task === task)) {
            return "Task already exists."
        } else {
            return null;
        }
    }


    renderCreate(event) {
        event.preventDefault();
        const createInput = this.refs.createInput;
        const value = createInput.value;

        const validateInput = this.validateInput(value);
        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(value);
        this.refs.createInput.value = "";
    }


    render() {
        return (
            <form onSubmit={this.renderCreate.bind(this) }>
                <br/>
                <h3>What do I need to do?</h3>
                <input type="text" ref="createInput" placeholder="..."/>
                <button>Create</button>
                {this.renderError() }
            </form>
        )
    }
}