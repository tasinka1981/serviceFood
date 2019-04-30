import React, { Component } from "react";

const INITIAL_VALUE = {
  name: "",
  email: "",
  phone: "",
  password: ""
};
export default class SignUpForm extends Component {
  state = {
    ...INITIAL_VALUE
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({
      ...INITIAL_VALUE
    });
  };
  render() {
    const { name, email, phone, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
          />
        </p>
        <p>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
        </p>
        <p>
          <input
            type="phone"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            placeholder="Phone"
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
        </p>
        <button>Sign Up</button>
      </form>
    );
  }
}
