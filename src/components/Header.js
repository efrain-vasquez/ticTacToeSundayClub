
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

const styleCenter = {
  'align': 'center'
}

function Header (props) {
  const { classes } = props
  return (
    <div>
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Toolbar>
            <Typography variant='h6' color='inherit'>
            Welcome to Tic-Tac-Code
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Button variant='contained' className={classes.button}>
        <Link to='/Board'>Play</Link>
      </Button>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
