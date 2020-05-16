import axios from "axios";

// Basic API params
const KEY = "Youtube_API_key_here";
export const basePARAMS = {
  key: KEY,
  part: "snippet",
  maxResults: 5,
};

// Pre-configured axios instence
const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export default youtube;
