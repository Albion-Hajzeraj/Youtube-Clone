import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(data?.items?.[0]);

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <section className="channel-detail-page">
      <div className="channel-banner" />
      <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      <div className="video-list-wrap">
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default ChannelDetail;
