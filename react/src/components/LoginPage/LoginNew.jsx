import React from 'react'
import './LoginNew.css'

function LoginNew() {
  return (
    <div className="loginpage">
      <section className="form">
        <h1 className="welcome">Welcome to <span style={{color: 'orange'}}>Nest</span>Fit</h1>
        <div className="username">
          <h4><span style={{color:'orange'}}>User</span>name</h4>
          <input className="input-username" type="text" />
        </div>
        <div className="password">
          <h4><span style={{color:'orange'}}>Pass</span>word</h4>
          <input className="input-password" type="password" />
        </div>
        <div className="remember-me">
          <input className="input-remember-me" type="checkbox"></input>
          <p>Remember me</p>
        </div>
        <div className="btn">
          <button className="register">Register</button>
          <button className="login">Login</button>
        </div>
          <hr />
        <div className="btn-login-google">
          <button className="google" >Log in with Google</button>
        </div>
        <div className="btn-login-facebook">
          <button className="facebook">Log in with Facebook</button>
        </div>
      </section>
    </div>
  )
}

export default LoginNew