import React, { Component } from "react";
import PlayerCard from "../../components/PlayerCard";
import PlayerTeam from "../../components/PlayerTeam";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import API from "../../utils/API";
import "./style.css";
import Nav from "../../components/Nav";
import { Container, Col, Row } from "reactstrap";

class App extends Component {
  state = {
    // players,
    players: [],
    filteredPlayers: [],
    selectedPlayers: [],
    tier: 1
  };

  // Loads all players and sets them to this.state.players
  componentDidMount() {
    API.getPlayers()
      .then(res => {
        const players = res.data;
        const filteredPlayers = players.filter(player => player.tier === 1);

        this.setState({
          players: players,
          filteredPlayers: filteredPlayers
        });
      })
      .catch(err => console.log(err));
  }

  selectPlayer = selectedPlayer => {
    this.setState({ tier: this.state.tier + 1 }, function() {
      var joined = this.state.selectedPlayers.concat(selectedPlayer);
      const filteredPlayers = this.state.players.filter(
        player => player.tier === this.state.tier
      );

      this.setState({
        selectedPlayers: joined,
        filteredPlayers
      });
    });
  };

  removePlayer = name => {
    // Filter this.state.players for players with a name not equal to the name being removed
    if (this.state.filteredPlayers.length > 1) {
      const filteredPlayers = this.state.filteredPlayers.filter(
        player => player.name !== name
      );
      // Set this.state.players equal to the new players array
      this.setState({ filteredPlayers });
    }
  };

  // Map over this.state.players and render a PlayerCard component for each player object
  render() {
    if (this.state.selectedPlayers.length < 5) {
      return (
        <div>
          <Nav />
          <Container>
            <Wrapper style={{ opacity: 0.2 }}>
              <Row>
                <Title className="title">
                  Make Your Selection from{" "}
                  <span className="font-weight-bold">
                    Tier {this.state.tier}{" "}
                  </span>
                </Title>
              </Row>
              <Row>
                {this.state.filteredPlayers.slice(0, 4).map(player => (
                  <PlayerCard
                    selectPlayer={this.selectPlayer}
                    removePlayer={this.removePlayer}
                    key={player.name}
                    group={player.tier}
                    ranking={player.rankingChg}
                    name={player.name}
                    image={player.image}
                    money={player.money}
                  />
                ))}
              </Row>
            </Wrapper>
          </Container>
        </div>
      );
    } else {
      return (
        <div>
          <Nav />
          <Container>
            <Wrapper>
              <Row>
                <Title className="title">Selected Players</Title>
                <table id="teamTable" align="center">
                  <thead>
                    <td>Tier</td>
                    <td>Player</td>
                  </thead>
                  <tbody>
                    {this.state.selectedPlayers.map(player => (
                      <PlayerTeam
                        key={player.name}
                        name={player.name}
                        group={player.group}
                      />
                    ))}
                  </tbody>
                </table>
              </Row>
            </Wrapper>
          </Container>
        </div>
      );
    }
  }
}

export default App;
