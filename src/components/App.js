import React, {useState} from "react";
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer.js";
import CommentList from "./CommentList.js";

function App() {
  console.log("Here's your data:", video);
  const [videoData, setVideoData] = useState(video);
  const [commentsHidden, setCommentsHidden] = useState(false);
  function handleUpvote() {
    const updatedVid = {...videoData};
    updatedVid.upvotes += 1;
    setVideoData(updatedVid);
  }
  function handleDownvote() {
    const updatedVid = {...videoData};
    updatedVid.downvotes += 1;
    setVideoData(updatedVid);
  }
  function toggleCommentsHide() {
    setCommentsHidden(!commentsHidden);
  }

  return (
    <div className="App">
      <VideoPlayer video={videoData} onUpvote={handleUpvote} onDownvote={handleDownvote} onCommentHide={toggleCommentsHide} commentHideState={commentsHidden} />
      <hr/>
      <CommentList comments={videoData.comments} commentHideState={commentsHidden} />
    </div>
    // <div className="App">
    //   <iframe
    //     width="919"
    //     height="525"
    //     src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    //     frameBorder="0"
    //     allowFullScreen
    //     title="Thinking in React"
    //   />
    // </div>
  );
}

export default App;
