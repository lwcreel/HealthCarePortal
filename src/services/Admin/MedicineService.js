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

    return axios({
        url: API_URL + "medicines",
        headers: authHeader(),
        method: "POST",
        data: newMedicine
    })
}

export function updateMedicine(data) {

    let id = data["id"];
    delete data["id"];
    Object.keys(data).forEach(k => (!data[k] && data[k] !== undefined) && delete data[k]);

    return axios({
        url: API_URL + "medicines/" + id,
        headers: authHeader(),
        method: "PUT",
        data: data
    })
}

export function deleteMedicine(id) {

    return axios.delete(API_URL + "medicines/" + id, { headers: authHeader() });
}

export function allMedicines() {

    return axios.get(API_URL + "medicines", { headers: authHeader() });
}