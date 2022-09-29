import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { allMedicines } from "../../services/Admin/MedicineService";

export default class ViewReports extends Component {

    constructor(props) {

        super(props);
        this.state = {

            values: [""],
            reportToRender: ""
        }
    }

    handleReport(report) {

        switch (report) {
            case "Medicine Report":
                const p = Promise.resolve(allMedicines());
                p.then(value => {
                    console.log(value.data);
                    this.setState({ values: value.data })
                }).catch(err => {
                    console.log(err);
                })
                break;
            case "User Report":
                break;
            default:
                return "oopsy woopsy there was a fukky wukky UwU"
        }
    }

    handleChange(value) {
        this.setState({ reportToRender: value })
    }

    render() {

        let keys = Object.keys(this.state.values[0]);

        return (
            <Container fluid>
                <Row>
                    <Col>
                        <label>
                            <p>Select a report to generate:</p>
                            <select name="reports" id="allowedReports" onChange={(e) => this.handleChange(e.target.value)}>
                                <option value="User Report">User Report</option>
                                <option value="Sales Report">Sales Report</option>
                                <option value="Medicine Report">Medicine Report</option>
                                <option value="Order Report">Order Report</option>
                                <option value="Data Report">Data Report</option>
                            </select>
                        </label>
                        <input type="submit" value="Submit" onClick={() => this.handleReport(this.state.reportToRender)} />
                    </Col>
                </Row>
                <table>
                    <thead>
                        <tr>
                            {/* <th>ID</th>
                            <th>Medicine Name</th>
                            <th>Company Name</th>
                            <th>Price</th>
                            <th>Uses</th>
                            <th>Quantity</th>
                            <th>Expiration Date</th> */}
                            {keys &&
                                keys.map((key) => {
                                    return <th>{key}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.values.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.medName}</td>
                                    <td>{data.companyName}</td>
                                    <td>{data.price}</td>
                                    <td>{data.uses}</td>
                                    <td>{data.quantity}</td>
                                    <td>{data.expDate}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Container>
        )
    }
}