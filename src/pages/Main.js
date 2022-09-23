import React, { useState, useEffect } from "react";
import Feed from '../components/Feed';
import Popup from "../components/Popup";
import LoginForm from "../components/LoginForm";


function Main(props) {

    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPopup(true);
        }, 1000)
    }, [])

    return (
        <div className="main">
            <div className="main-wrapper">
                <Feed />
                <Popup trigger={showPopup} setTrigger={setShowPopup} >
                    <LoginForm setShowPopup={setShowPopup} setLoginGate={props.setLoginGate} />
                </Popup>
            </div>
        </div>
    )
}

export default Main;
