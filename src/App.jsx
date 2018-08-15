import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import TodoList from './TodoList.jsx'
import todoList from './todos.json'

class App extends Component {

  state = { todos: todoList,
            idCount: 6}

  handleInputChange = (event) => {
    if (event.key === 'Enter') {
      const newTodoList = this.state.todos.slice();
      newTodoList.push({
        title: event.target.value,
        completed: false,
        id: this.state.idCount
      })
      this.setState({ todos: newTodoList ,
                        idCount: this.state.idCount+1})
      event.target.value = ''
    }
  }
  isChecked = (id) => () => {
    const newTodoList = this.state.todos.slice()

    newTodoList.forEach(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed
      }
    });
    this.setState({ todos: newTodoList })
  }
  destroyItem = (id) => () => {
    const newTodoList = this.state.todos.slice()
    newTodoList.forEach((todo, index) => {
      if (todo.id === id) {
        newTodoList.splice(index, 1)
      }
    })
    this.setState({ todos: newTodoList })
  }

  destroyList = () => {
    const completedTodos = this.state.todos.filter(todo => !todo.completed)
    this.setState({
      todos: completedTodos,
    })
  }
  
  routeAll = () => {
    return(
    <TodoList todos={this.state.todos} destroyItem={this.destroyItem} isChecked={this.isChecked}/>
    )
  }

  routeActive = () => {
    let activeTodos = this.state.todos.filter(todo => !todo.completed)
    
    return(
      <TodoList todos={activeTodos} destroyItem={this.destroyItem} isChecked={this.isChecked}/>
    )
  }

  routeCompleted = () => {
    let completedTodo = this.state.todos.filter(todo => todo.completed)
    return(
      <TodoList todos={completedTodo} destroyItem={this.destroyItem} isChecked={this.isChecked}/>
    )
  }
  
  render() {
    return (
        <section className="todoapp">
            <header className='header'>
                <h1>todos</h1>
                <input className='new-todo' placeholder='What needs to be done?' autoFocus onKeyDown={this.handleInputChange} />
            </header>
        <section className='main'>
            <Switch>
              <Route exact path='/' component={this.routeAll}/>
              <Route path ='/active' component={this.routeActive}/>
              <Route path = '/completed' component={this.routeCompleted}/>
            </Switch>
        </section>
        
        <footer className="footer">
          <span className='todo-count'><strong>0</strong> item(s) left</span>
            <ul className="filters">
              <li>
                <Link to="/">All</Link>
              </li>
              <li>
                <Link to="/active">Active</Link>
              </li>
              <li>
                <Link to="/completed">Completed</Link>
              </li>
            </ul>
                <button onClick={this.destroyList} className='clear-completed'>Clear completed</button>
         </footer>
        </section>
    );
  }
} 
export default App;