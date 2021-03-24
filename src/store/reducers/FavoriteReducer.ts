import { Action, State, StorageInitialState } from '../types/FavoriteTypes'

const FavoriteReducer = (state: State, action: Action): State => {
   switch (action.type) {
      case 'REQUEST':
         return {
            isLoading: true,
            data: StorageInitialState,
            error: ''
         }
      case 'SUCCESS':
         return {
            isLoading: false,
            data: action.payload,
            error: ''
         }

      case 'FAILURE':
         return {
            isLoading: false,
            data: StorageInitialState,
            error: action.error
         }

      default:
         return state
   }
}

export default FavoriteReducer