import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
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
    group: 1
  };

  componentDidMount() {
    const filteredPlayers = this.state.players.filter(
      player => player.group === 1
    );
    this.setState({ filteredPlayers });
  }

  selectPlayer = name => {
    console.log(this.state.group);
    console.log(name);
    this.setState({ group: this.state.group + 1 }, function() {
      console.log(this.state.group);
      var joined = this.state.selectedPlayers.concat(name);
      console.log("joined: " + joined);
      this.setState({ selectedPlayers: joined });
      const filteredPlayers = this.state.players.filter(
        player => player.group === this.state.group
      );

      this.setState({ filteredPlayers });
    });
  };

  removePlayer = name => {
    // Filter this.state.players for players with a name not equal to the name being removed
    const filteredPlayers = this.state.filteredPlayers.filter(
      player => player.name !== name
    );
    // Set this.state.players equal to the new players array
    this.setState({ filteredPlayers });
  };

  // Map over this.state.players and render a PlayerCard component for each player object
  render() {
    return (
      <Wrapper>
        <Title>Players List</Title>
        {this.state.filteredPlayers.slice(0, 4).map(player => (
          <PlayerCard
            selectPlayer={this.selectPlayer}
            removePlayer={this.removePlayer}
            key={player.name}
            group={player.group}
            ranking={player.ranking}
            name={player.name}
            image={player.PhotoUrl}
            money={player.money}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
