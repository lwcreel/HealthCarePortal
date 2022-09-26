import axios from "axios";

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
        url: "http://localhost:8080/medicines",
        method: "POST",
        data: newMedicine
    })
}

export function updateMedicine(data) {

    console.log(data);
    return data;
}