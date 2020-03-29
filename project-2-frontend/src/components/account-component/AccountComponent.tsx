import React, { SyntheticEvent } from "react";
import { Users } from "../../models/Users";
import { Redirect } from "react-router";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

interface AccountComponentProps {
  createUser: Users;
  loggedUser: Users;
  createErrorMessage: string;
  loggedErrorMessage: string;
  CreateUserActionMapper: (
    u: string,
    p: string,
    fn: string,
    ls: string,
    e: string
  ) => void;
  LoginActionMapper: (u: string, p: string) => void;
}

interface AccountComponentState {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  usernameLogin: string;
  usernamePassword: string;
}

export class AccountComponent extends React.Component<
  AccountComponentProps,
  AccountComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      usernameLogin: "",
      usernamePassword: ""
    };
  }

  createUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { username, password, firstName, lastName, email } = this.state;
    this.props.CreateUserActionMapper(
      username,
      password,
      firstName,
      lastName,
      email
    );
    this.setState({
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    });
  };

  loginUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    this.props.LoginActionMapper(
      this.state.usernameLogin,
      this.state.usernamePassword
    );
    // when we reach this point we dont get that return value from the mapper
    // that value got hijacked and was sent to dispatch
    this.setState({
      usernamePassword: ""
    });
  };

  updateUsername = (e: any) => {
    this.setState({
      username: e.currentTarget.value
    });
  };

  updatePassword = (e: any) => {
    this.setState({
      password: e.currentTarget.value
    });
  };

  updateFirstName = (e: any) => {
    this.setState({
      firstName: e.currentTarget.value
    });
  };

  updateLastName = (e: any) => {
    this.setState({
      lastName: e.currentTarget.value
    });
  };

  updateEmail = (e: any) => {
    this.setState({
      email: e.currentTarget.value
    });
  };

  updateUsernameLogin = (e: any) => {
    this.setState({
      usernameLogin: e.currentTarget.value
    });
  };
  updateUsernamePassword = (e: any) => {
    this.setState({
      usernamePassword: e.currentTarget.value
    });
  };

  render() {
    return (
      <div>
        {/* SIGNUP FORM */}

        <Form className="signup" onSubmit={this.createUser}>
          <h2>Sign Up</h2>
          <FormGroup row>
            <Label for="Username" sm={3}>
              Username
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.updateUsername}
                value={this.state.username}
                type="text"
                name="username"
                id="username"
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Password" sm={3}>
              Password
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.updatePassword}
                value={this.state.password}
                type="password"
                name="password"
                id="password"
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="firstName" sm={3}>
              First Name
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.updateFirstName}
                value={this.state.firstName}
                type="text"
                name="firstName"
                id="firstName"
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="lastName" sm={3}>
              Last Name
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.updateLastName}
                value={this.state.lastName}
                type="text"
                name="lastName"
                id="lastName"
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Email" sm={3}>
              Email Address
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.updateEmail}
                value={this.state.email}
                type="text"
                name="email"
                id="email"
                required
              />
            </Col>
          </FormGroup>
          <Button color="info">Submit</Button>
        </Form>

        <p>{this.props.createErrorMessage}</p>

        {/* LOGIN FORM */}

        <Form className="login" onSubmit={this.loginUser}>
          <h2>Login</h2>
          <FormGroup row>
            <Label for="Username" sm={3}>
              Username
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.updateUsernameLogin}
                value={this.state.usernameLogin}
                type="text"
                placeholder="Enter your username"
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Password" sm={3}>
              Password
            </Label>
            <Col sm={5}>
              <Input
                onChange={this.updateUsernamePassword}
                value={this.state.usernamePassword}
                type="text"
                placeholder="Enter your passoword"
                required
              />
            </Col>
          </FormGroup>
          <Button color="info">Login</Button>
        </Form>
        {/* <p>{this.props.loggedErrorMessage}</p> */}
      </div>
    );
  }
}
