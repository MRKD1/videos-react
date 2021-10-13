import React from "react";

const VideoDetail = ({ video }) => {
  //const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  if (!video) {
    return <div class="ui active centered inline loader"></div>;
  } else {
    return (
      <div>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title="video player"
            allow="allowfullscreen"
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    );
  }
};

export default VideoDetail;
