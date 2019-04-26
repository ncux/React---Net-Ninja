import React, { Component } from 'react';


class AddSexyTgirl extends Component {

    state = {
        name: '',
        age: null
    };

    getInputValue = (e) => this.setState({ [e.target.id]: e.target.value });

    onSubmitForm = e => {
        e.preventDefault();
        this.props.addNewTgirl(this.state);
        this.setState({ name: '', age: null });
    };

    render() {
        return (
            <div>

                <form onSubmit={ this.onSubmitForm }>

                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" onChange={ this.getInputValue }/>
                    </div>

                    <div>
                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" onChange={ this.getInputValue }/>
                    </div>

                    <button type="submit">Submit</button>

                </form>

            </div>
        )
    }
}

export default AddSexyTgirl;