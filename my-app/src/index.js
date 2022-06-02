import React from 'react';
import ReactDOM from 'react-dom';
import './index.js';
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      > 
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({ squares: squares });
  }

  renderSquare(i) {
    console.log(this.state.squares);
    return (
      <Square 
        value={this.state.squares[i]} // Passing a property called value
        onClick={() => this.handleClick(i)} 
      />
    ); 
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">          
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


class ShoppingList extends React.Component {
  render() { // The render methods return a description of what to display on the scren
    const name = 'test';
    const li1 = <li>Instagram</li> // This is a react element!
    return (
      <div className="shopping-list">
        <h1>Shopping List for {name} {this.props.name}</h1>
        <ul>
          { li1 }
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <React.StrictMode>
    <Game />
    <ShoppingList name='lol' />
  </React.StrictMode>,
  document.getElementById('root')
);





























