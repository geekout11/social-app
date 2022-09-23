import { useState } from "react";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from "./pages/Main";
import Register from './pages/Register';
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';

function App() {

  const loginFlag = localStorage.getItem('myLocalStorage');
  const [loginGate, setLoginGate] = useState(loginFlag && true);

  return (
    <>
      <NavBar loginGate={loginGate} setLoginGate={setLoginGate} />
      <Routes>
        <Route path="/" element={<Main setLoginGate={setLoginGate} />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login setLoginGate={setLoginGate} />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App;