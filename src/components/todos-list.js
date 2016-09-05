import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItems from './todos-list-items';


export default class TodosList extends React.Component {
  renderItems(){
    const props = _.omit(this.props, 'todos');
    return _.map(this.props.todos, (todos, index) => <TodosListItems key={index} {...todos} {...props} />);
  }
  render() {
    console.log(this.props.todos)
    return (
      <table>
        <TodosListHeader />
          <tbody>
            {this.renderItems()}
          </tbody>
      </table>
    );
  }
}
