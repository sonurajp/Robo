import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import Searchbox from "./Searchbox";
import Scroll from "./Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: robots,
      searchfield: ""
    };
  }
  OnSearcgChange = (
    event //the reason why we used aroow function explained in video  210 20:50
  ) => {
    this.setState({ searchfield: event.target.value }); //event.target.vaule gives the value of what we typed check console in browser
  };
  render() {
    const filtered = this.state.robot.filter(robo => {
      return robo.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="tc pa2">
        <h1>Robo Search</h1>
        <Searchbox searchChange={this.OnSearcgChange} />
        <Scroll>
          <CardList robots={filtered} />
        </Scroll>
      </div>
    );
  }
}

export default App;
