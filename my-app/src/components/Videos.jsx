import React from "react";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (videos === null) return <Loader />;
  if (!videos.length) return <p className="empty-state">No videos found for this view.</p>;

  return (
    <div className={`videos-grid ${direction === "column" ? "videos-column" : ""}`}>
      {videos.map((item, idx) => (
        <div key={idx}>
          {item.id?.videoId && <VideoCard video={item} />}
          {item.id?.channelId && <ChannelCard channelDetail={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
