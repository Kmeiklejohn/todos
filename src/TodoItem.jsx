import React from 'react'

class TodoItem extends React.Component{
    render(){
      return (
        <li className={this.props.completed?'completed':''}>
          <div className='view'>
            <input onClick={this.props.onClickCheck} key={this.props.id} className='toggle' type='checkbox' defaultChecked={this.props.completed}/>
            <label>{this.props.title}</label>
            <button onClick={this.props.onClickDestroy} className='destroy'/>
          </div>
        </li>
      )
    }
  }

  export default TodoItem;