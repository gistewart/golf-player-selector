import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardDeck } from "reactstrap";

function PlayerTeam(props) {
  return (
    <table className="table">
      <tr>{props.name}</tr>
    </table>
  );
}

export default PlayerTeam;
