import React, { useContext } from 'react'
import { createStyles, fade, InputBase, makeStyles, Theme } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { AppCtx } from '../../Context/AppContext';

const useStyles = makeStyles((theme: Theme) =>
   createStyles({
      search: {
         position: 'relative',
         borderRadius: theme.shape.borderRadius,
         backgroundColor: fade(theme.palette.common.white, 0.15),
         '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
         },
         marginRight: theme.spacing(2),
         marginLeft: 0,
         width: '100%',
         [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
         },
      },
      searchIcon: {
         padding: theme.spacing(0, 2),
         height: '100%',
         position: 'absolute',
         pointerEvents: 'none',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
      },
      inputRoot: {
         color: 'inherit',
      },
      inputInput: {
         padding: theme.spacing(1, 1, 1, 0),
         // vertical padding + font size from searchIcon
         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
         transition: theme.transitions.create('width'),
         width: '100%',
         [theme.breakpoints.up('md')]: {
            width: '20ch',
         },
      },
   }),
);

const SearchInput: React.FC = () => {
   const classes = useStyles()
   const { updateMovieName } = useContext(AppCtx)
   return (
      <div className={classes.search}>
         <div className={classes.searchIcon}>
            <SearchIcon />
         </div>
         <InputBase
            placeholder="Search…"
            classes={{
               root: classes.inputRoot,
               input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => {updateMovieName(e.target.value)}}
         />
      </div>
   )
}

export default SearchInput