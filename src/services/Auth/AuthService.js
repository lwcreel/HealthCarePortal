import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (firstname, lastname, username, email, phonenumber, password) => {
  return axios.post(API_URL + "signup", {
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        window.sessionStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  window.sessionStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(window.sessionStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;