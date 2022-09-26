import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Medicine from "../Medicine";

export default class Cart extends Component {

    constructor(props) {

        super(props);
        this.state = {
            cart: [
                { id: 1, medicineName: "Tylenol", price: 9.99, quantity: 3 },
                { id: 3, medicineName: "Benadryl", price: 9.99, quantity: 1 },
            ]
        };
    }

    //executes when the user clicks on + button.
    handleIncrement = (medicine, maxValue) => {
        //get index of selected medicine
        let allMeds = [...this.state.cart];
        let index = allMeds.indexOf(medicine);

        if (allMeds[index].quantity < maxValue) {
            allMeds[index].quantity++;

            //update the state of current component (parent component)
            this.setState({ medicines: allMeds });
        }
    };

    //executes when the user clicks on - button.
    handleDecrement = (medicine, minValue) => {
        //get index of selected medicine
        let allMeds = [...this.state.medicines];
        let index = allMeds.indexOf(medicine);

        if (allMeds[index].quantity > minValue) {
            allMeds[index].quantity--;

            //update the state of current component (parent component)
            this.setState({ medicines: allMeds });
        }
    };

    render() {
        return (
            <div>
                {this.state.cart.map((med) => {
                    return (
                        <Medicine
                            medicine={med}
                            key={med.id}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                        >
                        </Medicine>
                    );
                })}
                <Button variant="primary" style={{ "padding": "10px" }}><h2>Checkout</h2></Button>
            </div>
        );
    }
}

