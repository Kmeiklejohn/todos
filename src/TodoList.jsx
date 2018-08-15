import React from 'react'
import TodoItem from './TodoItem'


class TodoList extends React.Component{
  render(){
      return(
      <React.Fragment>
              <ul className='todo-list'>
                 {this.props.todos.map( todo =>(
                 <TodoItem 
                   title={todo.title}
                   id={todo.id}
                   onClickDestroy={this.props.destroyItem(todo.id)}
                   completed={todo.completed}
                   onClickCheck={this.props.isChecked(todo.id)}/>))}
              </ul>
          </React.Fragment>
      )
      }
  }

  export default TodoList;

