import React, {Component} from 'react';
import '../styling/App.css';

export default class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        PLAYER_ONE_SYMBOL: "X",
        PLAYER_TWO_SYMBOL: "O",
        currentTurn: "X",
        board: ["", "", "", "", "", "", "", "", ""]

      };
    }

    render () {
      return (
        <div className="board">
         {this.state.board.map((cell, index) => {
           return <div onClick={() => this.handleClick(index)} key={index} className="square">{cell}</div>;
         })}
         </div>
      );
    }
}