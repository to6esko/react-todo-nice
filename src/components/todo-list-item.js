import React from 'react';


export default class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false };
    }


    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCanselClick() {
        this.setState({ isEditing: false });
    }

    onSaveTask(e) {
        e.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editTask.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }

    renderTaskSection() {
        const {task, isCompleted} = this.props;
        const taskStyle = {
            background: isCompleted ? 'green' : 'red',
            cursor: 'pointer'
        }
        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveTask.bind(this) }>
                        <input type="text" defaultValue={task} ref="editTask"/>
                    </form>
                </td>
            )
        }
        return (
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task) }>
                <li>
                    {task}
                </li>
            </td>
        )
    }

    renderTaskAction() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveTask.bind(this) }>Save</button>
                    <button onClick={this.onCanselClick.bind(this) }>Cansel</button>
                </td>
            )
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this) }>Edit</button>
                <button onClick={this.props.deleteTask.bind(this, this.props.task) }>Delete</button>
            </td>
        )
    }
    render() {
        return (
            <tr>
                {this.renderTaskSection() }
                {this.renderTaskAction() }
            </tr>
        )
    }
}