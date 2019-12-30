import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import players from "./players.json";

import Players from "./pages/Players";
import Nav from "./components/Nav";

class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players
  };

  removePlayer = name => {
    // Filter this.state.players for players with an name not equal to the name being removed
    const players = this.state.players.filter(player => player.name !== name);
    // Set this.state.players equal to the new players array
    this.setState({ players });
  };

  // Map over this.state.players and render a PlayerCard component for each player object
  render() {
    return (
      <Wrapper>
        <Title>Players List</Title>
        {this.state.players.slice(0, 3).map(player => (
          <PlayerCard
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
