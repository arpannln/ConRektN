import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PLAYER_ONE_SYMBOL: "X",
      PLAYER_TWO_SYMBOL: "O",
      currentTurn: "X",
      board: [
        "X", "X", "X", "X", "X", "X", "X", "X", "X"
      ]
    };
  }
  render() {
    return (
      <div className="board">
          {
        this.state.board.map( (sym) =>
          <div className="square">{sym}</div>
         )
        }
      </div>
    );
  }
}

export default App;
