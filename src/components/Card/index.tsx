import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card as CardWrapper, Grid } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ActionButton from '../ActionButton';
import { AppCtx } from '../../Context/AppContext';
import { Storage } from '../../store/types/FavoriteTypes';

const useStyles = makeStyles({
   grid: {
      maxWidth: 245,
   },
   root: {
      maxWidth: 245,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
   },
   card: {
      margin: 'auto',
      backgroundPosition: 'top center',
      backgroundSize: 'contain'
   },
   footer: {
      alignItems: 'flex-end',
   }
});

const Card: React.FC<Storage> = ({ Title, Poster, Plot, imdbID }) => {
   const classes = useStyles();
   const { LikeMovie, likedMovies, DislikeMovie } = useContext(AppCtx)
   const handleClick = () => {
      !likedMovies.some(item => item.imdbID === imdbID) ? 
         LikeMovie({ Title, Poster, Plot, imdbID }) : 
         DislikeMovie(imdbID)
   }

   return (
      <Grid item xs={6} sm={4} lg={3} className={classes.grid}>
         <CardWrapper className={classes.root}>
            <CardActionArea>
               <CardMedia
                  component="img"
                  alt={Title}
                  height="240"
                  image={Poster}
                  title={Title}
                  className={classes.card}
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {Title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     {Plot}
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions className={classes.footer}>
               <ActionButton
                  onClick={() => { handleClick() }}
                  liked={!likedMovies.some(item => item.imdbID === imdbID)}
               />
            </CardActions>
         </CardWrapper>
      </Grid>
   )
}

export default Card