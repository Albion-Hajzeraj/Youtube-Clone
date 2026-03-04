export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

export const fetchFromAPI = async (url) => {
  const joiner = url.includes("?") ? "&" : "?";
  const response = await fetch(`${BASE_URL}/${url}${joiner}maxResults=50`, { headers });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  return response.json();
};
