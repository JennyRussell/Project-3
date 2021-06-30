/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getUser: function (id) {
    return axios.get(`/api/user/${id}`);
  },
};
