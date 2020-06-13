import React, { Component } from 'react';
import './signin.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButtonm from '../custom-button/custom-button.component';

class Signin extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an accoubt</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            id='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            type='password'
            name='password'
            id='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <CustomButtonm type='submit'>SIGN IN</CustomButtonm>
        </form>
      </div>
    );
  }
}

export default Signin;
