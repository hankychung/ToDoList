import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import Types from 'prop-types'
import ui from '@style/theme'

const styles = {
  grow: {
    flexGrow: 1,
  },
}

function HeaderBar(props) {
  const { classes } = props
  return (
    <MuiThemeProvider theme={ui}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Todo
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  )
}

HeaderBar.propTypes = {
  classes: Types.object.isRequired,
}

export default withStyles(styles)(HeaderBar);
