import logo from './resources/App-Logo.png';
import userLogo from './resources/User-Logo.jpg';
import adminLogo from './resources/Admin-Logo.jpg';
import { Container, Row, Col, Image } from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <body className="App">
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
            <img className="Link-logo" src={userLogo} alt="User Portal Icon" />
            <h4>User Login</h4>
          </Col>
          <Col md={6}>
            <img className="Link-logo" src={adminLogo} alt="Admin Portal Icon" />
            <h4>Admin Login</h4>
          </Col>
        </Row>
      </Container>
    </body>
  );
}

export default App;
