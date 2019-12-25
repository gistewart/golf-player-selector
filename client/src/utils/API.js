import axios from "axios";

export default {
  // Gets all players
  getPlayers: function() {
    return axios.get("/api/players");
  }
};
