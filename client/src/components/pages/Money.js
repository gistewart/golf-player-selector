import React from "react";
import axios from "axios";

const url =
  "https://api.sportsdata.io/golf/v2/json/Leaderboard/349?key=0522638fe55f47de9f85d4200532fee5";

class Money extends React.Component {
  state = {
    players: []
  };

  componentDidMount() {
    axios.get(url).then(res => this.setState({ players: res.data.Players }));
  }

  render() {
    console.log(this.state.players);
    return (
      <div className="row">
        {this.state.players.map(player => (
          <div key={player.PlayerID} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{player.Name}</h2>
                <p className="card-text">{player.Earnings} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Money;
