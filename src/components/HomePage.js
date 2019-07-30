import React, { Component } from 'react'
import Header from './Header.js'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default HomePage
