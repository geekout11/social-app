import React from "react";
import './Sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-wrapper">
                <div className="sidebar-users-to-follow">
                    <h3>Who to follow</h3>
                    <hr/>
                    <div className="sidebar-user">
                        <img className="sidebar-profile-img" src="/logo512.png" alt="img" />
                        <div className="sidebar-username">Dominik</div>
                        <button className="follow-btn">Follow</button>
                    </div>
                    <hr/>
                    <div className="sidebar-user">
                        <img className="sidebar-profile-img" src="/logo512.png" alt="img" />
                        <div className="sidebar-username">Dominik</div>
                        <button className="follow-btn">Follow</button>
                    </div>
                    <hr/>
                    <div className="sidebar-user">
                        <img className="sidebar-profile-img" src="/logo512.png" alt="img" />
                        <div className="sidebar-username">Dominik</div>
                        <button className="follow-btn">Follow</button>
                    </div>
                    <hr/>
                    <div className="sidebar-user">
                        <img className="sidebar-profile-img" src="/logo512.png" alt="img" />
                        <div className="sidebar-username">Dominik</div>
                        <button className="follow-btn">Follow</button>
                    </div>
                    <hr/>
                    <button className="show-more-btn">Show more</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;