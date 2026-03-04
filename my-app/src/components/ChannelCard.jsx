import React from "react";
import { Link } from "react-router-dom";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <div className="channel-card-wrap" style={{ marginTop: marginTop || 0 }}>
    <Link to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id || ""}`} className="channel-card-link">
      <img
        src={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
        alt={channelDetail?.snippet?.title}
        className="channel-avatar"
      />
      <h3 className="channel-name">
        {channelDetail?.snippet?.title} <span className="verified-mark">✔</span>
      </h3>
      {channelDetail?.statistics?.subscriberCount && (
        <p className="channel-subs">
          {parseInt(channelDetail.statistics.subscriberCount, 10).toLocaleString("en-US")} subscribers
        </p>
      )}
    </Link>
  </div>
);

export default ChannelCard;
