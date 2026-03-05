import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { Videos, Loader, ErrorNotice } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    let isActive = true;
    setVideoDetail(null);
    setVideos(null);
    setError("");

    const loadVideoData = async () => {
      try {
        const detailData = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);
        const relatedData = await fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`);

        if (isActive) {
          setVideoDetail(detailData?.items?.[0] || null);
          setVideos(relatedData?.items || []);
        }
      } catch (err) {
        if (isActive) {
          setVideoDetail(null);
          setVideos([]);
          setError(err.message);
        }
      }
    };

    loadVideoData();
    return () => {
      isActive = false;
    };
  }, [id]);

  if (error) {
    return (
      <section className="video-detail-page">
        <ErrorNotice message={error} />
      </section>
    );
  }

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <section className="video-detail-page">
      <div className="video-detail-main">
        <div className="video-frame-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            title={title}
            className="video-embed"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <h1 className="video-detail-title">{title}</h1>
        <div className="video-detail-meta">
          <Link to={`/channel/${channelId}`} className="video-detail-channel">
            {channelTitle} <span className="verified-mark">Verified</span>
          </Link>
          <div className="video-detail-stats">
            <span>{parseInt(viewCount || 0, 10).toLocaleString()} views</span>
            <span>{parseInt(likeCount || 0, 10).toLocaleString()} likes</span>
          </div>
        </div>
      </div>

      <aside className="video-detail-side">
        <Videos videos={videos} direction="column" />
      </aside>
    </section>
  );
};

export default VideoDetail;
