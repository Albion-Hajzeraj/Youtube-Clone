import React, { useEffect, useState } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, Sidebar } from "./";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items));
  }, [selectedCategory]);

  return (
    <div className="feed-layout">
      <aside className="feed-sidebar">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <p className="copyright">Copyright 2022 JSM Media</p>
      </aside>

      <main className="feed-content">
        <h2 className="section-title">
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </h2>
        <Videos videos={videos} />
      </main>
    </div>
  );
};

export default Feed;
