import React from "react";
import "./style.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, CardDeck } from "reactstrap";

function PlayerCard({ removePlayer, selectPlayer, ...player }) {
  return (
    <CardDeck>
      <Row>
        <Col sm="4">
          <div className="card">
            <div className="img-container">
              <img alt={player.name} src={player.image} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Tier:</strong> {player.group}
                </li>
                <li>
                  <strong>Rank:</strong> {player.ranking}
                </li>
                <li>
                  <strong>Name:</strong> {player.name}
                </li>
                <li>
                  <strong>Money:</strong> {player.money}
                </li>
              </ul>
            </div>
            <span onClick={() => removePlayer(player.name)} className="remove">
              &#10060;
            </span>
            <span onClick={() => selectPlayer(player)} className="add">
              &#9989;
            </span>
          </div>
        </Col>
      </Row>
    </CardDeck>
  );
}

export default PlayerCard;
