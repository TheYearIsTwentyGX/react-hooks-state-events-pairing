import React, { useState } from "react";
import Comment from "./Comment.js";

function CommentList ({ comments, commentHideState }) {
    const commentList = comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
    });
    
    if (commentHideState) {
        return null;
    }

    return (
    <div>
        <h2>{comments.length} Comments</h2>
        {commentList}
    </div>)
}

export default CommentList;