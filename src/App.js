import React, { Component } from 'react';
import todoList from './todos.json'


class TodoItem extends React.Component{

  render(){
    return (
      <li className={this.props.value}>
        <div className='view'>
          <input className='toggle' type='checkbox' checked={this.props.completed}/>
          <label>{this.props.title}</label>
          <button className='destroy'/>
        </div>
      </li>
    )
  }
}


class TodoList extends React.Component{
  constructor(props){
    super(props)
    this.state = {todo:todoList}  
  }
  render(){
    const todos = this.state.todo
    return(

    <body>
      <header className='header'>
          <h1>todos</h1>
          <input className='new-todo' placeholder='What needs to be done?' autoFocus/>>
      </header>

        <section className='main'>
            <ul className='todo-list'>
               {todos.map( todo =>(
               <TodoItem 
               title={todo.title}
               completed={todo.completed}/>))}
            </ul>
        </section>
        <footer className='footer'>
        <span className='todo-count'><strong>0</strong> item(s) left</span>
        <button className='clear-complete'>Clear completed</button>

        </footer>
    </body>
    )
    }
}

class App extends Component {
  render() {
    return (
      <body>
        <section className="todoapp">
          <TodoList/>
        </section>
      </body>
    );
  }
}

export default App;
