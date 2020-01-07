import React from "react";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardDeck } from "reactstrap";

function PlayerCard(props) {
  return (
    <CardDeck>
      <Row>
        <Col sm="4">
          <div className="card">
            <div className="img-container">
              <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Tier:</strong> {props.group}
                </li>
                <li>
                  <strong>Rank:</strong> {props.ranking}
                </li>
                <li>
                  <strong>Name:</strong> {props.name}
                </li>
                <li>
                  <strong>Money:</strong> {props.money}
                </li>
              </ul>
            </div>
            <span
              onClick={() => props.removePlayer(props.name)}
              className="remove"
            >
              &#10060;
            </span>
            <span
              onClick={() => props.selectPlayer(props.name)}
              className="add"
            >
              &#9989;
            </span>
          </div>
        </Col>
      </Row>
    </CardDeck>
  );
}

export default PlayerCard;
