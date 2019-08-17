import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4f8e48091077e24b2e6c0acc4f9b7072a0ac127ff678100257da99c6f785753e"
  }
});
