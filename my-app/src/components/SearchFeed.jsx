import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data.items));
  }, [searchTerm]);

  return (
    <section className="search-feed-page">
      <h2 className="section-title">
        Search results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </h2>
      <div className="video-list-wrap">
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default SearchFeed;
