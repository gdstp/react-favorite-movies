import React, { useContext } from 'react'
import { Container } from '@material-ui/core'
import Card from '../components/Card'
import GridContainer from '../components/GridContainer'
import { AppCtx } from '../Context/AppContext'
import { Alert } from '@material-ui/lab'
import TopBar from '../components/TopBar'

const Favorites: React.FC = () => {
   const { likedMovies } = useContext(AppCtx)
   return (
      <div>
         <TopBar />
         <Container style={{ marginTop: '84px' }}>
            <GridContainer>
               {likedMovies.length === 0 &&
                  <Alert severity="info" style={{ width: '100%' }}>
                     You haven't liked any movie yet.
                  </Alert>
               }
               {likedMovies && likedMovies.map((item) => (
                  <Card
                     key={item.imdbID}
                     Title={item.Title}
                     Poster={item.Poster}
                     imdbID={item.imdbID}
                     Plot={item.Plot}
                  />
               ))}
            </GridContainer>

         </Container>
      </div>
   )
}

export default Favorites