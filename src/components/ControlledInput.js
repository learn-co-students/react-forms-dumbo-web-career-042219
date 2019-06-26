import React from 'react';

class Form extends Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <input type="text" name="firstName" value={this.handleChange} />
        <input type="text" name="lastName" value={this.handleChange} />
      </form>
    )
  }
}

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}



export default Form;
export default ControlledInput;