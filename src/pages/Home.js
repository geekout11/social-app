import React, { useState, useEffect } from "react";
import './Home.css';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Popup from "../components/Popup";
import LoginForm from "../components/LoginForm";
import Share from "../components/Share";


function Home(props) {

    return (
        <>
            <div className="home-container">
                <div className="posts">
                    <Share className="share" />
                    <Feed />
                </div>
                <Sidebar />
                <Popup trigger={props.showPopup} setTrigger={props.setShowPopup} >
                    <LoginForm setLoginGate={props.setLoginGate} setShowPopup={props.setShowPopup} />
                </Popup>
            </div>
        </>
    )
}

export default Home;