import { Component } from "react";
import { Button } from "react-bootstrap";
import Medicine from "../Medicine";
import SearchBar from "./SearchBar";

import { allMedicines } from "../../services/Admin/MedicineService";


class MedicineShop extends Component {

    constructor(props) {

        super(props);

        this.state = {
            medicines: [],
            cart: []
        };
    }

    render() {
        return (
            <div key="top">
                <SearchBar />
                {this.state.medicines && this.state.medicines.map((med) => {
                    return (
                        <Medicine
                            medicine={med}
                            key={med.id}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                        >
                            <Button variant="primary" onClick={() => {
                                let newCart = this.state.cart;
                                newCart.push(med);
                                this.setState({ cart: newCart });
                            }}>Add to Cart</Button>
                        </Medicine>
                    );
                })}

                <Button variant="primary" onClick={() => {
                    console.log(this.state.cart);
                    this.props.handleCart(this.state.cart);
                }} style={{ "padding": "10px" }}><h2>Save Cart</h2></Button>
            </div>
        );
    }

    componentDidMount = async () => {

        const p = Promise.resolve(allMedicines());
        p.then(value => {

            for (let i = 0; i < value.data.length; i++) {
                value.data[i].quantity = 0;
            }
            this.setState({ medicines: value.data });
        }).catch(err => {
            console.log(err);
        })
    };


    // TODO: Fix issue with being unable to get index of 
    // correct medicine from state after reloading page

    //executes when the user clicks on + button.
    handleIncrement = (medicine, maxValue) => {
        //get index of selected medicine
        let allMeds = this.state.medicines;
        let index = 0;

        for (let i = 0; i < allMeds.length; i++) {

            if (allMeds[i].id === medicine.id) {
                index = i;
                break;
            }
        }

        if (allMeds[index] && allMeds[index].quantity < maxValue) {
            allMeds[index].quantity++;

            //update the state of current component (parent component)
            this.setState({ medicines: allMeds });
        }
    };

    //executes when the user clicks on - button.
    handleDecrement = (medicine, minValue) => {
        //get index of selected medicine
        let allMeds = this.state.medicines;
        let index = allMeds.indexOf(medicine);

        for (let i = 0; i < allMeds.length; i++) {

            if (allMeds[i].id === medicine.id) {
                index = i;
                break;
            }
        }

        if (allMeds[index] && allMeds[index].quantity > minValue) {
            allMeds[index].quantity--;

            //update the state of current component (parent component)
            this.setState({ medicines: allMeds });
        }
    };


}

export default MedicineShop