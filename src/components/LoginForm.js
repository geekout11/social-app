import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoBox from '../data/InfoBox';
import { API } from '../data/Api';
import { SHOW_MSG_TIME } from '../data/Config';


function LoginForm(props) {

    const [inputData, setInputData] = useState({
        login: '',
        pass: '',
    });
    const [msg, setMsg] = useState('');
    const navi = useNavigate();

    const controlData = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    };

    const submitLogin = (e) => {
        e.preventDefault();
        const loginAPI = new API('login');
        loginAPI.setData({
            username: inputData.login,
            password: inputData.pass,
            ttl: 3600,
        });
        loginAPI.getData(handleAPIAnswer);
    };

    const handleAPIAnswer = (res) => {
        console.log(res);
        if (res.data.error || res.status !== 200) {
            setMsg('Wrong login or password');
            setTimeout(() => setMsg(''), SHOW_MSG_TIME);
        } else {
            const { username, jwt_token: jwtToken } = res.data;
            localStorage.setItem(
                'myLocalStorage',
                JSON.stringify({ username, jwtToken })
            );
            props.setLoginGate(true);
            navi('/');
        }
    };

    return (
        <div className="login-right">
            <form onSubmit={submitLogin}>
                <div className="login-box">
                    <input type="text" name="login" placeholder="Username" className="login-input" onChange={controlData} required />
                    <input type="password" name="pass" placeholder="Password" className="login-input" onChange={controlData} required />
                    <button type="submit" className="login-button" onClick={() => props.setShowPopup(false)}>Login</button>
                    <button className="login-register-button" to={'register'}>Create Account</button>
                    {msg && <InfoBox msg={msg} />}
                </div>
            </form>
        </div>
    )
}

export default LoginForm;