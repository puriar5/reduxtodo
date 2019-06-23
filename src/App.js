import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import './App.css'
import { addNew, changeStatus } from './actions/todoAction';

class App extends Component {
    handleClick = (id) => {
        this.props.changeStatus(id)
    }
    handleSubmit = (event) => {
        event.preventDefault();
        let id = this.props.todos[this.props.todos.length -1 ].id + 1
        let text = event.target.todoItem.value
        let status = false
        let body = {
            id,
            text,
            status
        }
        this.props.addTodo(body)
        event.target.reset();
    }
    render() {
        console.log(this.props)
        let {todos} = this.props
        return (
            <Fragment>
                <h1>Hello World</h1>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="todoItem" 
                        placeholder="Enter todo item"
                    />
                    <input type="submit" value="DO IT"/>
                </form>  
                <ul>
                {
                    todos.map(todo => {
                        let {text, id, status} = todo
                        return(
                            <li 
                                className={status === true ? 'done' : 'not-done'} 
                                key={id}
                                onClick = {() => this.handleClick(id)}
                            >
                            {text}
                            </li>
                        )
                    })
                }
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    let {todos} = state.todo
    return {
        todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo : (body) => dispatch(addNew(body)),
        changeStatus : (id) => dispatch(changeStatus(id))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)