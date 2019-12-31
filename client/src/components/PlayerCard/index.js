import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, CardDeck } from "reactstrap";

function PlayerCard(props) {
  // const group = props.group;
  // console.log(group);
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
                  <strong>Group:</strong> {props.group}
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
              n
            </span>
            <span
              onClick={() => props.selectPlayer(props.name)}
              className="add"
            >
              y
            </span>
          </div>
        </Col>
      </Row>
    </CardDeck>
  );
}

export default PlayerCard;
