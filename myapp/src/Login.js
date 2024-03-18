import {Component} from 'react'
import { Link } from 'react-router-dom'

import './login.css';


class Login extends Component{
    render(){
        return (
            <div className="main-container">
                <div className="board-container">
                    <h1 className='board-heading'>Board.</h1>
                </div>
                <div className='login-form-container'>
                    <div className='main-login-form'>
                        <h1>Sign In</h1>
                        <p>Sign in to your account</p>
                        <div className='main-option-container'>
                            <div ><p className='option-text'>Sign in with google</p></div>
                            <div><p className='option-text'>Sign in with Apple</p></div>
                        </div>
                        <form className='main-form'>
                            <label>Email address</label>
                            <input type = "text" className='main-input'/>
                            <label>password</label>
                            <input type = "password" className='main-input'/>
                            <a className='forgot-password'>Forgot Password?</a>
                            <Link to = "/dashboard">
                            <input href = "/dashboard"type = "submit" value = "sign in" className='sign-in-button'/>
                            </Link>
                        </form>
                        <div className='dont-have'>
                        <p className='dont'>Dont have an account? <a className='forgot-password'>Register here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;