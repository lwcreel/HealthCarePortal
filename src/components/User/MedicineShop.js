import { Component } from "react";
import { Button } from "react-bootstrap";
import Medicine from "../Medicine";


class MedicineShop extends Component {

    constructor(props) {

        super(props);

        this.state = {
            medicines: [

                { id: 1, medicineName: "Tylenol", price: 9.99, quantity: 0 },
                { id: 2, medicineName: "Advil", price: 9.99, quantity: 0 },
                { id: 3, medicineName: "Benadryl", price: 9.99, quantity: 0 },
                { id: 4, medicineName: "Amoxocillin", price: 9.99, quantity: 0 }
            ],
        };
    }

    render() {
        return (
            <div>
                <h4>Shopping Cart</h4>
                    {this.state.medicines.map((med) => {
                        return (
                            <Medicine medicine={med} key={med.id}>
                                <Button variant="primary">Add to Cart</Button>
                            </Medicine>
                        );
                    })}
            </div>
        );
    }

    componentDidMount = async () => {

        this.setState({ medicines: this.state.medicines });
    };
}

export default MedicineShop