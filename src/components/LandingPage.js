import userLogo from '../resources/User-Logo.jpg';
import adminLogo from '../resources/Admin-Logo.jpg';
import logo from '../resources/App-Logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage() {

    return (
        <Container>
            <Row>
                <Col style={{ padding: 10 }}>
                    <img src={logo}
                        className="App-logo"
                        alt="logo" />
                    <p> HealthCare Portal </p>
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <Link to="/login">
                        <img className="Link-logo" src={userLogo} alt="User Portal Icon" />
                    </Link>
                    <h4>Login</h4>
                </Col>
                <Col lg={6}>
                    <Link to="/register">
                        <img className="Link-logo" src={adminLogo} alt="Registration Portal Icon" />
                    </Link>
                    <h4>Register</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage;