import React from 'react'
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles'
import Types from 'prop-types'
import InputBox from './listCmps/InputBox'

const styles = {
  container: {
    width: '500px',
    padding: '50px',
    margin: 'auto',
    marginTop: '20px',
  },
  card: {
    marginTop: '20px',
  },
}

function List(props) {
  const { classes } = props
  return (
    <div className={classes.container}>
      <InputBox />
      <Card className={classes.card}>
        test
      </Card>
    </div>
  )
}

List.propTypes = {
  classes: Types.object.isRequired,
}

export default withStyles(styles)(List)
