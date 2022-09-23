import React from "react";
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

function Post() {
    return (
        <div className="post">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" src="/logo512.png" alt="img" />
                        <div className="post-username">Dominik</div>
                        <div className="post-date">1h ago</div>
                    </div>
                    <div className="post-top-right">
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className="post-bottom">
                    <FontAwesomeIcon icon={faThumbsUp} className="like-icon"/>
                    <FontAwesomeIcon icon={faThumbsDown} className="dislike-icon"/>
                    <span className="post-like-counter">1 like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;