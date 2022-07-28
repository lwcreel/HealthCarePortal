import { Container, Row } from 'react-bootstrap';

export default function ReportForm() {
    return (
        <Container fluid>
            <div>
                <form >
                    <Row>
                        <label>
                            <p>Select a report to generate:</p>
                            <select id="allowedReports">
                                <option value="Stock Report" />
                                <option value="Sales Report" />
                                <option value="Medicine Report" />
                                <option value="Order Report" />
                                <option value="Data Report" />
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