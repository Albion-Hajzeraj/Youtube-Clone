import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, ErrorNotice } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState("");
  const { searchTerm } = useParams();

  useEffect(() => {
    let isActive = true;
    setVideos(null);
    setError("");

    const loadSearch = async () => {
      try {
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
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

    loadSearch();
    return () => {
      isActive = false;
    };
  }, [searchTerm]);

  return (
    <section className="search-feed-page">
      <h2 className="section-title">
        Results for <span>{searchTerm}</span>
      </h2>
      {error && <ErrorNotice message={error} />}
      <div className="video-list-wrap">
        <Videos videos={videos} />
      </div>
    </section>
  );
};

export default SearchFeed;
