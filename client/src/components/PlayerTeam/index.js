import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function PlayerTeam(props) {
  return (
    <>
      <tr key={props.name}>
        <td>{props.group}</td>
        <td>{props.name}</td>
      </tr>
    </>
  );
}

export default PlayerTeam;
