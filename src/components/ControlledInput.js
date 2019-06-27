// Code ControlledInput Component Here
import React, { Component } from 'react';

class ControlledInput extends Component {

    state = {
        firstName: "Don",
        lastName: "Corleone"
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
        return (
            <form>
                <input type='text' name='firstName' onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
                <input type='text' name='lastName' onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
                <input type='submit' value="That's my name" />
            </form>
        );
    }
}

export default ControlledInput;