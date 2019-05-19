import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import Board from './components/Board.js'
import HomePage from './components/HomePage.js'
import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { browserHistory } from 'react-router'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/Board' render={(props) => <Board {...props} someFunction={this.someFunction} />} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
