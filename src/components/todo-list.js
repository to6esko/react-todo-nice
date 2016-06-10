import React from 'react';
import _ from 'lodash';
import TodoListItem from './todo-list-item';


export default class TodoList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, i) =>
            <TodoListItem key={i} {...todo} {...props}/>);
    }

    render() {
        return (
            <ol>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItems() }
                    </tbody>
                </table>
            </ol>
        )
    }
}