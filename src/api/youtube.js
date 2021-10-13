import axios from "axios";

const KEY = "AIzaSyCbxIQiFDkT3jMzoZJUdNGW2T9OSm4-yus";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY,
  },
});
