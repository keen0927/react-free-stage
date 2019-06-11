import React, { Component } from 'react'

export class TodoForm extends Component {

    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            text: this.state.text,
            
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        type="text" 
                        placeholder="todo..."
                    />
                </form>
            </div>
        )
    }
}

export default TodoForm