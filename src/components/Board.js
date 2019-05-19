import React from 'react'
import Header from './Header.js'
import '../App.css'

class Board extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: null,
      counterO: 0,
      counterX: 0,
      isAllSquareClicked: function (squares) {
        let count = 0
        squares.forEach(function (item) {
          if (item !== null) {
            count++
          }
        })
        if (count === 9) {
          return true
        } else {
          return false
        }
      },
      square: function (props) {
        return (
          <button className='square' onClick={props.onClick}>
          {props.value}
        </button>
        )
      },
      findWinner: function (squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ]

        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i]
          if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
            return this.squares[a]
          }
        }
        return null
      }

    }
  }

  renderSquare (i) {
    return <this.state.square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
  }

  handleClick (i) {
    const squares = this.state.squares.slice()
    if (this.state.findWinner(squares) || squares[i]) {
      console.log(this.props)
      return
    }

    if (this.state.isAllSquareClicked(squares) === true) {
      return
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O'
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    })
  }
  resetSquares () {
    this.setState({ squares: Array(9).fill(null) })
  }

  render () {
    const winner = this.state.findWinner(this.state.squares)
    const isFilled = this.state.isAllSquareClicked(this.state.squares)
    let status
    if (winner) {
      (winner === 'X' ? this.state.counterX++ : this.state.counterO++)
      status = 'Winner: ' + winner
      this.resetSquares()
    } else if (!winner && isFilled) {
      status = 'Game drawn'
      this.resetSquares()
    } else {
      status = 'Now ' + (this.state.xIsNext ? 'X' : 'O') + '\'s turn'
    }
    return (
      <div>
        <div className='status'>{status}</div>
        <h2>Player O: {this.state.counterO}</h2>
        <h2>Player X: {this.state.counterX}</h2>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default Board
