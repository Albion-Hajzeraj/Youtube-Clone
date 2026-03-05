export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  const apiKey = process.env.REACT_APP_RAPID_API_KEY;
  if (!apiKey) {
    throw new Error(
      "Missing REACT_APP_RAPID_API_KEY. Add it to .env and restart the dev server."
    );
  }

  const headers = {
    "X-RapidAPI-Key": apiKey,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  };

  const joiner = url.includes("?") ? "&" : "?";
  const response = await fetch(`${BASE_URL}/${url}${joiner}maxResults=50`, { headers });

  if (!response.ok) {
    let details = "";
    try {
      const payload = await response.json();
      details = payload?.message || payload?.error?.message || "";
    } catch (_) {
      details = "";
    }
    throw new Error(
      details
        ? `API request failed (${response.status}): ${details}`
        : `API request failed (${response.status}).`
    );
  }

  return response.json();
};
