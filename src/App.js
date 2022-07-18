import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [
        {
          name: "Frankenstien",
          id: 1,
        },
        {
          name: "Frank",
          id: 2,
        },
        {
          name: "Stien",
          id: 3,
        },
        {
          name: "Ken",
          id: 4,
        },
        {
          name: "Ranken",
          id: 5,
        },
      ],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value });
            console.log(this.state);
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
