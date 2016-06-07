import React from 'react';


export default class CreateTodo extends React.Component {
    
    
    handleCreate(e) {
        e.preventDefault();
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = "";
    }


    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" ref="createInput"placeholder="What do I need to do?"/>
                <button>Create</button>
                </form>
        );
    }
}