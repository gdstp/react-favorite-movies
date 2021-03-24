import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core'
import SearchInput from '../SearchInput';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      root: {
         width: '100%',
         top: 0,
         flexGrow: 1,
         position: 'fixed',
         zIndex: 4
      },
      menuButton: {
         marginRight: theme.spacing(2),
      },
      title: {
         flexGrow: 1,
      },
      link: {
         color: 'white',
         textDecoration: 'none'
      }
   }),
);
const TopBar: React.FC = () => {
   const classes = useStyles()
   return (
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h6" className={classes.title}>
                  <Link to="/" className={classes.link}>
                     Movies
                  </Link>
               </Typography>

               <SearchInput />

               <Link to="/favorites" className={classes.link}>
                  <Button color="inherit">Favorites</Button>
               </Link>
            </Toolbar>
         </AppBar>
      </div>
   )
}

export default TopBar