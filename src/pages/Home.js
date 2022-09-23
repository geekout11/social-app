import React, { useState, useEffect } from "react";
import './Home.css';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Popup from "../components/Popup";
import LoginForm from "../components/LoginForm";


function Home(props) {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(true);
        }, 1000)
    }, [])

    return (
        <>
            <div className="home-container">
                <Feed />
                <Sidebar />
                <Popup trigger={showPopup} setTrigger={setShowPopup} >
                    <LoginForm setShowPopup={setShowPopup} setLoginGate={props.setLoginGate} />
                </Popup>
            </div>
        </>
    )
}

export default Home;