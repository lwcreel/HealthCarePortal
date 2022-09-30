import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Medicine from "../Medicine";

export default class Cart extends Component {

    constructor(props) {

        super(props);
        this.state = {
            cart: this.props.cart
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
        let allMeds = [...this.state.cart];
        let index = allMeds.indexOf(medicine);

        if (allMeds[index].quantity > minValue) {
            allMeds[index].quantity--;

            //update the state of current component (parent component)
            this.setState({ medicines: allMeds });
        }
    };

    handleCheckout = (checkoutFunc) => {
        checkoutFunc(this.state.cart);
    }

    // componentDidMount() {

    //     this.setState({ cart: })
    // }

    render() {

        // console.log(this.state.cart);

        if (this.state.cart) {
            console.log("pre-map call: " + this.state.cart);
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
                    <Button variant="primary" style={{ "padding": "10px" }} onClick={() => this.props.handleCheckout(this.state.cart)}><h2>Checkout</h2></Button>
                </div>
            );
        }
        else {
            return <div></div>;
        }
    }
}


