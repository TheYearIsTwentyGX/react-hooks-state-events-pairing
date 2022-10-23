import React, { useState } from "react";

function VideoPlayer({ video, onUpvote, onDownvote, onCommentHide, commentHideState }) {
    function handleCommentsHidden() {
        
    }
    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={video.embedUrl}
                frameBorder="0"
                allowFullScreen
                title={video.title}
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={onUpvote}>{video.upvotes} 👍</button>
            <button onClick={onDownvote}>{video.downvotes} 👎</button>
            <br/>
            <button onClick={onCommentHide}>{(commentHideState ? 'Show Comments' : 'Hide Comments')}</button>
        </div>
    )

}

export default VideoPlayer;