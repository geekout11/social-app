import { useState } from "react";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from "./pages/Main";
import Register from './pages/Register';
import NavBar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';

function App() {

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
      setTimeout(() => {
          setShowPopup(true);
      }, 1000)
  }, [])


  const loginFlag = localStorage.getItem('myLocalStorage');
  const [loginGate, setLoginGate] = useState(loginFlag && true);

  return (
    <>
      <NavBar loginGate={loginGate} setLoginGate={setLoginGate} />
      <Routes>
        <Route path="/" element={<Main setLoginGate={setLoginGate} />} />
        <Route path="home" element={<Home setLoginGate={setLoginGate} setShowPopup={setShowPopup} setTrigger={setTrigger} trigger={triggerShowPopup}/>} />
        <Route path="login" element={<Login setLoginGate={setLoginGate} />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  )
}

export default App;