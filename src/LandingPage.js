import userLogo from './resources/User-Logo.jpg';
import adminLogo from './resources/Admin-Logo.jpg';
import logo from './resources/App-Logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage() {

    return (
        <Container fluid>
            <Row>
                <Col style={{ padding: 10 }}>
                    <img src={logo}
                        className="App-logo"
                        alt="logo" />
                    <p> HealthCare Portal </p>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Link to="/login/false">
                        <img className="Link-logo" src={userLogo} alt="User Portal Icon" />
                    </Link>
                    <h4>User Login</h4>
                </Col>
                <Col md={6}>
                    <Link to="/login/true">
                        <img className="Link-logo" src={adminLogo} alt="Admin Portal Icon" />
                    </Link>
                    <h4>Admin Login</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default LandingPage;