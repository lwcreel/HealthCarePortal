import { Container, Row } from 'react-bootstrap';

export default function DeleteMedForm() {
    return (
        <Container fluid>
            <div>
                <form >
                    <Row>
                        <label>
                            <p>Enter Medicine ID to remove</p>
                            <input type="number" />
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