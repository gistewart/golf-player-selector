import React from "react";
import axios from "axios";

const url =
  "https://api.sportsdata.io/golf/v2/json/Leaderboard/349?key=0522638fe55f47de9f85d4200532fee5";

class Scores extends React.Component {
  state = {
    scores: []
  };

  componentDidMount() {
    axios.get(url).then(res => this.setState({ scores: res.data.Players }));
  }

  render() {
    console.log(this.state.scores);
    return (
      <div className="row">
        {this.state.scores.map(score => (
          <div key={score.PlayerID} className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{score.Name}</h2>
                <p className="card-text">{score.TotalScore} </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Scores;
