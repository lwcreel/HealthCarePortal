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
                {this.state.medicines.map((med) => {
                    return (
                        <Medicine
                            medicine={med}
                            key={med.id}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                        >
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

    componentDidUpdate(prevProps, prevState) {
        //console.log("componentDidUpdate - medicine");
      }
}

export default MedicineShop