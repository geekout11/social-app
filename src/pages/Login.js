import React from 'react';
import './Login.css';
import LoginForm from '../components/LoginForm';


function Login (props) {

    return (
        <div className="login-container ">
            <div className="login-wrapper">
                <LoginForm setLoginGate={props.setLoginGate} />
            </div>
        </div>
    )
}
export default Login;
