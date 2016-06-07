import React from 'react';
import _ from 'lodash';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    renderItems() {
        return _.map(this.props.todos, (todo, i) =>
            <TodosListItem key={i} {...todo}/>)
    }
    render() {
        return (
            <table>
                <TodosListHeader/>
                <tbody>
                    {this.renderItems() }
                </tbody>
            </table>
        );
    }
}