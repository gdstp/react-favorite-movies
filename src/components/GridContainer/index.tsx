import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   root: {
      marginTop: '88px'
   }
})

const GridContainer: React.FC = ({ children }) => {
   const classes = useStyles()
   return (
      <Grid container spacing={1} className={classes.root}>
         <Grid container item xs={12} spacing={3}>
            {children}
         </Grid>
      </Grid>
   )
}

export default GridContainer