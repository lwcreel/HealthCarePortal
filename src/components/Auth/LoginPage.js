import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { loginUser } from '../../services/Auth/LoginService';
import "./LoginPage.css"

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isAdmin: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmit(e) {

    e.preventDefault();
    console.log(loginUser([this.state.username, this.state.password]));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Container fluid>
        <div className="login-wrapper">
          <Row>
            <h1>Please Log In</h1>
          </Row>
          <form onSubmit={this.onSubmit}>
            <Row>
              <label>
                <p>Username</p>
                <input value={this.state.username} onChange={this.handleChange} type="text" name="username" />
              </label>
            </Row>
            <Row>
              <label>
                <p>Password</p>
                <input value={this.state.password} onChange={this.handleChange} type="password" name="password" />
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
}

export default Login;