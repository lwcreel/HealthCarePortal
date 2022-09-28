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
                {this.state.medicines.map((med) => {
                    return (
                        <Medicine
                            medicine={med}
                            key={med.id}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                        >
                            <Button variant="primary" onClick={() => { this.addToCart(med) }}>Add to Cart</Button>
                        </Medicine>
                    );
                })}

                <Button variant="primary" style={{ "padding": "10px" }}><h2>Add Selected to Cart</h2></Button>
            </div>
        );
    }

    componentDidMount = async () => {

        const p = Promise.resolve(allMedicines())
        p.then(value => {
            this.setState({ medicines: value.data });
        }).catch(err => {
            console.log(err);
        })
    };

    //executes when the user clicks on + button.
    handleIncrement = (medicine, maxValue) => {
        //get index of selected medicine
        let allMeds = [...this.state.medicines];
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

    addToCart = (medicine) => {

        console.log(this.cart);

        if (medicine.quantity > 0) {
            let newCart = [...this.state.cart];
            newCart.push(medicine);
            this.setState({ cart: newCart });
        }
        console.log(this.state.cart);
    };

    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate - medicine");
    }
}

export default MedicineShop