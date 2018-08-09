import React, { Component } from 'react';
import todoList from './todos.json'


class TodoItem extends React.Component{

  render(){
    return (
      <li className={this.props.completed?'completed':''}>
        <div className='view'>
          <input onClick={this.props.onClickCheck} id={this.props.id} className='toggle' type='checkbox' defaultChecked={this.props.completed}/>
          <label>{this.props.title}</label>
          <button onClick={this.props.onClickDestroy} className='destroy'/>
        </div>
      </li>
    )
  }
}
class TodoList extends React.Component{
  state = {todos:todoList}  
  
 handleInputChange = (event) => {
   if(event.key==='Enter'){
  const newTodoList = this.state.todos.slice();
   newTodoList.push({
        title:event.target.value,
        completed : false})
       this.setState({todos:newTodoList})
  }
 }
isChecked = (id) => () => {
  const newTodoList = this.state.todos.slice()
  
  newTodoList.forEach(todo => {
      if(id === todo.id){
        todo.completed = !todo.completed
        }          
      });
      this.setState({todos:newTodoList})
  
}
  destroyItem = (id) => () =>{
    const newTodoList= this.state.todos.slice()
        newTodoList.forEach((todo, index) =>{
    if(todo.id === id){
      newTodoList.splice(index, 1)
    }
  })
  this.setState({todos: newTodoList})
  }

  destroyList = () => {
      const completedTodos = this.state.todos.filter(todo => !todo.completed)
      this.setState({todos: completedTodos})
  }

  render(){
    const todos = this.state.todos
    return(
    <React.Fragment>
      
      <header className='header'>
          <h1>todos</h1>
          <input className='new-todo' placeholder='What needs to be done?' autoFocus completed={this.isChecked} onKeyDown={this.handleInputChange}/>
      </header>
        <section className='main'>
            <ul className='todo-list'>
               {todos.map( todo =>(
               <TodoItem 
                 title={todo.title}
                 key={todo.id}
                 onClickDestroy={this.destroyItem(todo.id)}
                 completed={todo.completed}
                 onClickCheck={this.isChecked(todo.id)}/>))}
            </ul>
        </section>
        
         <div className='footer'>
          <span className='todo-count'><strong>0</strong> item(s) left</span>
          <button onClick={this.destroyList} className='clear-complete'>Clear completed</button>
        </div>
    </React.Fragment>
    )
    }
}
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="todoapp">
          <TodoList/>
        </section>
      </React.Fragment>
    );
  }
}
export default App;
