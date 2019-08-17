import axios from "axios";

const KEY = "AIzaSyDP3YFd3sJfKKy96gXkXJbk_rhtudHBKcs";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
