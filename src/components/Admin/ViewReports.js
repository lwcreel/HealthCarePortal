import { Component } from "react";

export default class ViewReports extends Component {

    constructor(props) {

        super(props);
        this.state = {

            reports: [{
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
            }]
        }
    }

    render() {
        return (
            <div>
                Report Details
                < table >
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
                        {this.state.reports.map((d) => {
                            return (
                                <tr key={d.orderId}>
                                    <td>{d.orderId}</td>
                                    <td>{d.userId}</td>
                                    <td>{d.medName}</td>
                                    <td>{d.orderDate}</td>
                                    <td>{d.price}</td>
                                    <td>{d.quantity}</td>
                                    <td>{d.totalPrice}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table >
            </div >
        )
    }
}