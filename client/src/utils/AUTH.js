/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const auth =  {
  // Gets user info
  getUser: function (id) {
    return axios.get(`/auth/user/${id}`);
  },
  // Logs the user out
  logout: function (id) {
    return axios.post(`/auth/logout/${id}`);
  },
  // Log the user in

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

export const login = (email, password)  => {
  return axios.post(`http://localhost:3001/auth/login/`, { email, password });
};

export default auth;