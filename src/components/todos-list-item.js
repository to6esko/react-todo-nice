import React from 'react';


export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isEditing: false };
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }
    onChangeClick() {
        this.setState({ isEditing: false });
   }


    renderTaskSection() {
        const {task, isCompleted} = this.props;
        const taskStyle = {
            color: isCompleted ? "green" : "red",
            cursor: 'pointer'
        };
        return (
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this,task)}>{task}</td>
        );
}
    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button>Save</button>
                    <button onClick={this.onChangeClick.bind(this)}>Cansel</button>
                </td>
            );
        }
        return (
            <td>
                <button onClick={this.onEditClick.bind(this) }>Edit</button>
                <button>Delete</button>
            </td>
        );
    }
    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}
            </tr>
        );
    }
}