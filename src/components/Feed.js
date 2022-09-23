import React from "react";
import './Feed.css'
import Post from "./Post";
import Share from "./Share";

function Feed() {
    return (
        <div className="feed">
            <div className="feed-wrapper">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Feed;