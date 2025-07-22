import React from 'react'
import InputBox from '../components/InputBox';
import Button from '../components/Button';
const Login = () => {
  return (
    <div>
        <h2>Login Page</h2>
        <p>Please enter your credentials to log in.</p>
        <InputBox type={'email'} inputname={'email'} />
        <InputBox type={'password'} inputname={'password'} />
        <Button type={'submit'} name={'Login'} />
    </div>
  )
}

export default Login