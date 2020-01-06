import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import PlayerTeam from "./components/PlayerTeam";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import players from "./players.json";

import Players from "./pages/Players";
import Nav from "./components/Nav";

class App extends Component {
  state = {
    players,
    filteredPlayers: [],
    selectedPlayers: [],
    tier: 1
  };

  componentDidMount() {
    const filteredPlayers = this.state.players.filter(
      player => player.tier === 1
    );
    this.setState({ filteredPlayers });
  }

  selectPlayer = name => {
    this.setState({ tier: this.state.tier + 1 }, function() {
      var joined = this.state.selectedPlayers.concat(name);
      this.setState({ selectedPlayers: joined });
      const filteredPlayers = this.state.players.filter(
        player => player.tier === this.state.tier
      );

      this.setState({ filteredPlayers });
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
        <Wrapper>
          <Title>Make Your Selection from Tier {this.state.tier} Golfers</Title>
          {this.state.filteredPlayers.slice(0, 4).map(player => (
            <PlayerCard
              selectPlayer={this.selectPlayer}
              removePlayer={this.removePlayer}
              key={player.name}
              group={player.tier}
              ranking={player.rankingChg}
              name={player.name}
              image={player.photoURL}
              money={player.money}
            />
          ))}
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <Title>Selected Players</Title>
          {this.state.selectedPlayers.map(player => (
            <PlayerTeam key={player} name={player} />
          ))}
        </Wrapper>
      );
    }
  }
}

export default App;
