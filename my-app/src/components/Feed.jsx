import React, { useEffect, useState } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar, ErrorNotice } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Trending");
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let isActive = true;
    setVideos(null);
    setError("");

    const loadFeed = async () => {
      try {
        const data = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
        if (isActive) {
          setVideos(data?.items || []);
        }
      } catch (err) {
        if (isActive) {
          setVideos([]);
          setError(err.message);
        }
      }
    };

    loadFeed();
    return () => {
      isActive = false;
    };
  }, [selectedCategory]);

  return (
    <div className="feed-layout">
      <aside className="feed-sidebar">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <p className="copyright">WatchGrid</p>
      </aside>

      <main className="feed-content">
        <h2 className="section-title">
          {selectedCategory} <span>streams</span>
        </h2>
        {error && <ErrorNotice message={error} />}
        <Videos videos={videos} />
      </main>
    </div>
  );
};

export default Feed;
