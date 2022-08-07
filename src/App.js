import React from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // fetching superheroes for the app, instead of monsters
  //  componentDidMount() {
  //    fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
  //      .then((response) => response.json())
  //      .then((users) => this.setState({ monsters: users }));
  //  }

  // shuffle an array
  //  shuffle(sourceArray) {
  //    for (var i = 0; i < sourceArray.length - 1; i++) {
  //      var j = i + Math.floor(Math.random() * (sourceArray.length - i));
  //
  //      var temp = sourceArray[j];
  //      sourceArray[j] = sourceArray[i];
  //      sourceArray[i] = temp;
  //    }
  //    return sourceArray;
  //  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    //    this.shuffle(filteredMonsters);
    // console.log(filteredMonsters);

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
