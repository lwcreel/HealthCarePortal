import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { allMedicines } from "../../services/Admin/MedicineService";
import { listUsers } from "../../services/Admin/ReportService";

export default class ViewReports extends Component {

    constructor(props) {

        super(props);
        this.state = {

            values: [""],
            reportToRender: ""
        }
    }

    handleReport(report) {

        let p = '';

        switch (report) {
            case "Medicine Report":
                p = Promise.resolve(allMedicines());
                p.then(value => {
                    this.setState({ values: value.data })
                }).catch(err => {
                    console.log(err);
                })
                break;
            case "User Report":
                p = Promise.resolve(listUsers());
                p.then(value => {

                    for (let i = 0; i < value.data.length; i++) {
                        
                        delete value.data[i].medCart;
                        delete value.data[i].password;
                        delete value.data[i].reportList;
                        delete value.data[i].roles;
                    }   
                    console.log(value.data)


                    this.setState({ values: value.data })
                }).catch(err => {
                    console.log(err);
                })
                break;
            default:
                return "Failed to load a report"
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
                            {keys &&
                                keys.map((key) => {
                                    return <th>{key}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.values && this.state.values.map((data) => {
                            return (
                                <tr>
                                    {keys.map(key => {


                                        if (data[key] !== []) {
                                            return <td>{data[key]}</td>
                                        }
                                        else {
                                            return "";
                                        }
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Container>
        )
    }
}