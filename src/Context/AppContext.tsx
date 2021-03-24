import React, { useReducer, useState } from 'react'
import { favoriteMovie, getFavoritesInitialState, loadFavorites, removeFavorite } from '../store/actions/FavoriteAction'
import { fetchData } from '../store/actions/MovieAction'
import FavoriteReducer from '../store/reducers/FavoriteReducer'
import { Storage } from '../store/types/FavoriteTypes'

interface AppContextInterface {
   movieName: string,
   updateMovieName: (name: string) => void,
   likedMovies: Storage[],
   LikeMovie: ({ Title, Plot, Poster, imdbID }: Storage) => void
   DislikeMovie: (imdbID: string) => void
}

export const AppCtx = React.createContext({} as AppContextInterface)

export const AppProvider: React.FC = ({ children }) => {
   const [currentMovieName, setCurrentMovieName] = useState('')
   const [likedMovies, setLikedMovies] = useState(loadFavorites())
   const [_, dispatch] = useReducer(FavoriteReducer, getFavoritesInitialState())

   const updateMovieName = (name: string) => {
      setCurrentMovieName(name)
   }

   const LikeMovie = ({ Title, Poster, Plot, imdbID }: Storage) => {
      dispatch({ type: "REQUEST" })
      favoriteMovie({ Title, Poster, Plot, imdbID })
         .then((payload) => {
            setLikedMovies(payload)
            dispatch({ type: "SUCCESS", payload })
         })
         .catch((error) => dispatch({ type: "FAILURE", error }))
   }

   const DislikeMovie = (imdbID: string) => {
      removeFavorite(imdbID)
         .then((payload: Storage[]) => {
            setLikedMovies(payload)
            dispatch({ type: "SUCCESS", payload })
         })
         .catch((error) => dispatch({ type: "FAILURE", error }))
   }

   return (
      <AppCtx.Provider
         value={{
            movieName: currentMovieName,
            updateMovieName,
            likedMovies,
            LikeMovie,
            DislikeMovie
         }}
      >
         { children}
      </AppCtx.Provider>
   )
}