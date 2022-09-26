import { Container, Row } from 'react-bootstrap';

export default function ReportForm() {
    return (
        <Container fluid>
            <div>
                <form>
                    <Row>
                        <label>
                            <p>Select a report to generate:</p>
                            <select name="reports" id="allowedReports">
                                <option value="Stock Report">Stock Report</option>
                                <option value="Sales Report">Sales Report</option>
                                <option value="Medicine Report">Medicinte Report</option>
                                <option value="Order Report">Order Report</option>
                                <option value="Data Report">Data Report</option>
                            </select>
                        </label>
                    </Row>
                    <Row>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </Row>
                </form>
            </div>
        </Container>
    )
}