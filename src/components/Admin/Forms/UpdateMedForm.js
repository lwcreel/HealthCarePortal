import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { updateMedicine } from '../../../services/Admin/MedicineService';

export default function UpdateMedForm() {

    let [medId, setMedId] = useState("")
    let [medName, setMedName] = useState("");
    let [companyName, setCompanyName] = useState("");
    let [price, setPrice] = useState("");
    let [uses, setUses] = useState("");
    let [quantity, setQuantity] = useState("");
    let [data, setData] = useState("");

    return (
        <Container fluid>
            <div> Leave fields not being updated blank
                <form onSubmit={(e) => {
                    e.preventDefault();
                    setData({
                        id: medId,
                        medName: medName,
                        companyName: companyName,
                        price: price,
                        uses: uses,
                        quantity: quantity,
                    });
                    updateMedicine(data);
                }}>

                    <Row>
                        <label>Medicine ID</label>
                        <input value={medId} onChange={(e) => setMedId(e.target.value)} type="text" name="medId" />
                    </Row>
                    <Row>
                        <label>Medicine Name</label>
                        <input value={medName} onChange={(e) => setMedName(e.target.value)} type="text" name="medName" />
                    </Row>
                    <Row>
                        <label>Company Name</label>
                        <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} type="text" name="companyName" />
                    </Row>
                    <Row>
                        <label>Price</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="text" name="price" />
                    </Row>
                    <Row>
                        <label>Uses</label>
                        <input value={uses} onChange={(e) => setUses(e.target.value)} type="text" name="uses" />
                    </Row>
                    <Row>
                        <label>Quantity In Stock</label>
                        <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="text" name="quantity" />
                    </Row>
                    <Row>
                        <div id="submit">
                            <input type="submit" value="Submit" />
                        </div>
                    </Row>
                </form>
            </div>
        </Container>
    )
};