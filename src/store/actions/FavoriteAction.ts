import { Storage, StorageInitialState } from '../types/FavoriteTypes'

export const favoriteMovie = async ({ Title, Poster, Plot, imdbID }: Storage): Promise<Storage[]> => {
   return new Promise(function (resolve) {
      const storeContent = localStorage.getItem('movies')
      const items = { Title, Poster, Plot, imdbID }
      var parsed: Storage[]
      const arr: Storage[] = []

      if (storeContent !== null) {
         parsed = JSON.parse(storeContent)
         parsed.map(item => arr.push(item))
      }

      if (!arr.some(item => item.imdbID === imdbID) && arr.length < 10) {
         arr.push(items)
      }

      localStorage.setItem('movies', JSON.stringify(arr))

      resolve(arr)
   })

}

export const removeFavorite = async (imdbID: string): Promise<Storage[]> => {
   return new Promise(function (resolve) {
      const loaded = loadFavorites()
      const arr = loaded.filter(item => item.imdbID !== imdbID)
      localStorage.setItem('movies', JSON.stringify(arr))
      resolve(arr)
   })
}

export const loadFavorites = (): Storage[] => {
   const storedContent = localStorage.getItem('movies')
   return storedContent === null ? StorageInitialState : JSON.parse(storedContent)
}

export const getFavoritesInitialState = () => {
   return {
      data: loadFavorites(),
      isLoading: false,
      error: ''
   }
}