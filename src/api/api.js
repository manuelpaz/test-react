import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // Update with the correct server base URL
});

const badgesApi = {
  list() {
    return api.get("/badges");
  },

  create(badge) {
    return api.post("/badges", badge);
  },

  read(badgeId) {
    return api.get(`/badges/${badgeId}`);
  },

  update(badgeId, updates) {
    return api.put(`/badges/${badgeId}`, updates);
  },

  remove(badgeId) {
    return api.delete(`/badges/${badgeId}`);
  },
};

export default badgesApi;
