import React from "react";
import './Share.css';

function Share() {
    return (
        <div className="share">
            <div className="share-wrapper">
                <div className="share-top">
                    <img className="share-profile-img" src="/logo512.png" alt="img" />
                    <textarea placeholder="Type something" className="share-textarea" required></textarea>
                </div>
                <hr className="share-hr" />
                <button className="share-button">Post</button>
            </div>
        </div>
    )
}

export default Share;