import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loginUser } from '../../services/Auth/LoginService';

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
    let p = loginUser([this.state.username, this.state.password]);
    const login = ReactDOM.createRoot(document.getElementById('login'));
    login.render(<a href={p}>Go to Dashboard!</a>)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Container fluid>
        <div>
          <Row>
            <p>Please Log In</p>
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
              <div id="login">
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