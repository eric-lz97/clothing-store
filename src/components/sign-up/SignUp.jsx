import React, { Component } from 'react';
import './sign_up.scss'

import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'

import { auth, createUserProfileDocument } from "../../firebase/FirebaseUtils";

class SignUp extends Component {

  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault()
    if (this.state.password !== this.state.confirmPassword) {
      alert('passwords do not match')
      return
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      await createUserProfileDocument(user)
      this.setState({ displayName: '', email: '', password: '', confirmPassword: '' })
    } catch (e) {
      console.error(e)
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }


  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account </h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput name='displayName' type='text' value={displayName}
                     handleChange={this.handleChange} label='Display Name'
                     required/>
          <FormInput name='email' type='email' value={email}
                     handleChange={this.handleChange} label='Email'
                     required/>
          <FormInput name='password' type='password' value={password}
                     handleChange={this.handleChange} label='Password'
                     required/>
          <FormInput name='confirmPassword' type='password' value={confirmPassword}
                     handleChange={this.handleChange} label='Confirm Password'
                     required/>
          <CustomButton type='submit'>Sign up</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
