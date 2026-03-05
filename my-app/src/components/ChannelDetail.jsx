import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Videos, ChannelCard, ErrorNotice } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    let isActive = true;
    setError("");
    setChannelDetail(null);
    setVideos(null);

    const fetchResults = async () => {
      try {
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

        if (isActive) {
          setChannelDetail(data?.items?.[0]);
          setVideos(videosData?.items || []);
        }
      } catch (err) {
        if (isActive) {
          setChannelDetail(null);
          setVideos([]);
          setError(err.message);
        }
      }
    };

    fetchResults();
    return () => {
      isActive = false;
    };
  }, [id]);

  return (
    <section className="channel-detail-page">
      <div className="channel-banner" />
      <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      {error && <ErrorNotice message={error} />}
      <div className="video-list-wrap">
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default ChannelDetail;
