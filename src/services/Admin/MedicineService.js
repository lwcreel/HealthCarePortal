import axios from "axios";
import authHeader from "../Auth/AuthHeader";

const API_URL = "http://localhost:8080/"


export function addMedicine(data) {

    console.log(data);
    let newMedicine = {
        "quantity": data.quantity,
        "medName": data.medName,
        "companyName": data.companyName,
        "uses": data.uses,
        "expDate": data.expDate,
        "costFactor": data.price,
        "userList": []
    };

    axios({
        url: API_URL + "medicines",
        method: "POST",
        data: newMedicine
    })
}

export function updateMedicine(data) {

    console.log(data);
    return data;
}

export function allMedicines() {

    return axios.get(API_URL + "medicines", { headers: authHeader() });
}