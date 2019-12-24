import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import Money from "./pages/Money";
import Scores from "./pages/Scores";
import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">
              Money
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/scores" activeClassName="active">
              Scores
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="container">
        {/* <Switch>
          <Route exact path="/" component={Money} />
          <Route path="/money" component={Money} />
          <Route path="/scores" component={Scores} />
          <Route component={NoMatch} />
        </Switch> */}
      </div>
    </Router>
  );
}

export default App;
