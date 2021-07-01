/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets user info
  getUser: function (id) {
    return axios.get(`/auth/user/${id}`);
  },
  // Logs the user out
  logout: function (id) {
    return axios.post(`/auth/logout/${id}`);
  },
  // Log the user in
  login: function (email, password) {
    return axios.post(`/auth/login/`, { email, password });
  },
  // New user registration
  register: function (userData) {
    return axios.post(`/auth/register/`, userData);
  },
  update: function (userData, id) {
    return axios.post(`/auth/user/${id}`, userData);
  },
  remove: function (id) {
    return axios.post(`/auth/user/${id}`);
  },
};
