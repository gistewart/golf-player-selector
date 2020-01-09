import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Auth from "../../utils/Auth";
import "./style.css";
import { Button, FormGroup, Input } from "reactstrap";

class LoginForm extends Component {
  static contextType = UserContext;

  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = e => {
    e.preventDefault();
    const { username, password } = this.state;
    if (username && password) {
      Auth.logIn(username, password, response => {
        this.context.setUser(response);
        this.props.history.push("/");
      });
    }
  };

  render() {
    return (
      <>
        <h3 className="heading">Golf Player Selector</h3>
        <form className="login-form" onSubmit={this.submitHandler}>
          <p className="mb-5"></p>
          <FormGroup>
            {/* <Label>username</Label> */}
            <Input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.changeHandler}
            />
          </FormGroup>
          <FormGroup>
            {/* <Label>password</Label> */}
            <Input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.changeHandler}
            />
            <Button className="mt-3 btn-lg btn-dark btn-block" type="submit">
              Submit
            </Button>
          </FormGroup>
        </form>
      </>
    );
  }
}

export default withRouter(LoginForm);
