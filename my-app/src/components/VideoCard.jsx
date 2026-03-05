import React from "react";
import { Link } from "react-router-dom";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video: { id: { videoId } = {}, snippet = {} } = {} }) => (
  <article className="video-card">
    <Link to={videoId ? `/video/${videoId}` : "/video/cV2gBU6hKfY"}>
      <img
        src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title || "video thumbnail"}
        className="video-thumb"
      />
    </Link>
    <div className="video-card-content">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <h3 className="video-title">{(snippet?.title || demoVideoTitle).slice(0, 70)}</h3>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
        <p className="video-channel">
          {snippet?.channelTitle || demoChannelTitle} <span className="verified-mark">Verified</span>
        </p>
      </Link>
    </div>
  </article>
);

export default VideoCard;
