import axios from "axios";

export function loginUser(data) {

    /* uncomment to dynamically log in
    let fetchUri="http://localhost:8080/login?id=" + data[0] + "&password=" + data[1];

    const response = await fetch(fetchUri, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }).then((response) => response);

    console.log(response);
    */

    if(data[0] === "user" && data[1] === "user_password") {
        return "/dashboard";
    }

    if(data[0] === "admin" && data[1] === "admin_password") {
        return "/admin";
    }
}

export function registerUser(data) {
    return true;
}

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
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;