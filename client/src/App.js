import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import authenticatedAxios from "./utils/AuthenticatedAxios";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import UserContext from "./context/UserContext";
import "./App.css";

class App extends Component {
  state = {
    user: null
  };

  setUser = user => {
    this.setState({ user });
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      authenticatedAxios()
        .get("/api/me")
        .then(response => this.setUser(response.data));
    }
  }

  render() {
    const { user } = this.state;
    const setUser = this.setUser;
    return (
      <Router>
        <div>
          <header>
            <nav className="link">
              <Link to="/" className="link">
                Home
              </Link>{" "}
              |{" "}
              <Link to="/login" className="link">
                Login
              </Link>
            </nav>
          </header>

          <UserContext.Provider
            value={{
              user: user,
              setUser: setUser
            }}
          >
            <ProtectedRoute exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
          </UserContext.Provider>
        </div>
      </Router>
    );
  }
}

export default App;
