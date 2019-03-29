import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Types from 'prop-types'
import AddIcon from '@material-ui/icons/AddCircle'
import Divider from '@material-ui/core/Divider';

const styles = {
  container: {
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  inputBase: {
    flexGrow: 1,
  },
  icon: {
    verticalAlign: 'middle',
  },
  divider: {
    height: '26px',
    width: '1px',
    margin: '0 8px',
  },
}

function InputBox(props) {
  const { classes } = props
  return (
    <Paper className={classes.container}>
      <InputBase placeholder="add todos" className={classes.inputBase} />
      <Divider className={classes.divider} />
      <AddIcon className={classes.icon} />
    </Paper>
  )
}

InputBox.propTypes = {
  classes: Types.object.isRequired,
}

export default withStyles(styles)(InputBox)
