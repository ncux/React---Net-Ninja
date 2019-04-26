import React, { Component } from 'react';


class AddTodo extends Component {

    state = {
        title: ''
    };


    getInputValue = (e) => this.setState({ [e.target.name]: e.target.value });


    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNewTodo(this.state.title);
        this.setState({ title: '' });
    };


    render() {
        return (
            <div>

                <form onSubmit={ this.onSubmit } style={{ display: 'flex' }}>
                    <input onChange={ this.getInputValue } name="title" value={ this.state.title } placeholder="Add a todo" style={{ flex: '10', padding: '0.5rem' }}/>
                    <input type="submit" value="Add" style={{flex: '1', padding: '0'}} className="button"/>
                </form>

            </div>
        )
    }
}

export default AddTodo;