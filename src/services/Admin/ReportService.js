import axios from "axios";
import authHeader from "../Auth/AuthHeader";

const API_URL = "http://localhost:8080/"

export function listUsers() {

    return axios.get(API_URL + "users", { headers: authHeader() });
}