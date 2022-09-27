import { Component } from 'react'
import { Container } from "react-bootstrap";

// TODO: Dynamically retrieve data
class OrderStatus extends Component {
    constructor(props) {
        super(props);
        this.state = { orderInformation: [
            {
                orderId: "000001", 
                userId: "test", 
                medName: "Tylenol", 
                orderDate: "9/9/9999", 
                price: "9.99", 
                quantity: "3", 
                totalPrice: "3 * 9.99"
            },
            {
                orderId: "00000a", 
                userId: "test", 
                medName: "Benadryl", 
                orderDate: "9/9/9999", 
                price: "9.99", 
                quantity: "1", 
                totalPrice: "1 * 9.99"
            }

        ]}
    }

    render() {
        return (
            <Container fluid>
                <div className="jumbotron">Order Details</div>
                <table>
                    <thead>
                        <tr>
                            <th>Order Id</th>
                            <th>User Id</th>
                            <th>Medicine Name</th>
                            <th>Order Date</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orderInformation.map((data) => {
                            return (
                                <tr key={data.orderId}>
                                    <td>{data.orderId}</td>
                                    <td>{data.userId}</td>
                                    <td>{data.medName}</td>
                                    <td>{data.orderDate}</td>
                                    <td>{data.price}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.totalPrice}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Container>
        )
    }
}

export default OrderStatus;