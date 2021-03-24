import React, { useContext, useEffect, useReducer, useState } from 'react'
import { Container } from '@material-ui/core';
import Card from '../components/Card';
import GridContainer from '../components/GridContainer';
import { AppCtx } from '../Context/AppContext';
import reducer from '../store/reducers/Reducer';
import { initialState } from '../store/types/MovieTypes';
import StateComponent from '../components/StateComponent';
import PaginationContainer from '../components/PaginationContainer';
import useDeboucer from '../hooks/deboucer';
import TopBar from '../components/TopBar';
import { fetchData } from '../store/actions/MovieAction';

const Home: React.FC = () => {
   const { movieName } = useContext(AppCtx)
   const [{ isLoading, error, data }, dispatch] = useReducer(reducer, initialState)
   const laggedValue = useDeboucer(movieName, 1000)
   const [page, setPage] = useState(1)

   useEffect(() => {
      dispatch({ type: 'REQUEST' })
      fetchData(laggedValue, page)
         .then((res) => dispatch({ type: 'SUCCESS', payload: res.data }))
         .catch((err) => dispatch({ type: 'FAILURE', error: err.message }))
   }, [laggedValue, page])

   useEffect(() => {
      setPage(1)
   }, [movieName])

   return (
      <div>
         <TopBar />
         <Container style={{ marginTop: '24px' }}>
            <StateComponent
               isLoading={isLoading}
               error={error}
            />

            <GridContainer>
               {data.Search && data.Search.map((item, index) => (
                  <Card
                     key={index}
                     Title={item.Title}
                     Poster={item.Poster}
                     Plot={item.Plot}
                     imdbID={item.imdbID}
                  />
               ))}
            </GridContainer>
            
            <PaginationContainer
               total={data.totalResults}
               onChange={(currentPage) => setPage(currentPage)}
               currentRenderedPage={page}
            />
         </Container>
      </div>
   )
}

export default Home