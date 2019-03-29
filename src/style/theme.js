import { createMuiTheme } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'

const ui = createMuiTheme({
  palette: {
    primary: teal,
  },
  typography: {
    useNextVariants: true,
  },
})

export default ui
