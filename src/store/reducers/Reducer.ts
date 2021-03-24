import { Action, State, OMDBResponseInitialState } from "../types/MovieTypes";

const reducer = (state: State, action: Action): State => {
   switch (action.type) {
      case 'REQUEST':
         return {
            isLoading: true,
            data: OMDBResponseInitialState,
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
            data: OMDBResponseInitialState,
            error: action.error
         }
      default:
         return state
   }
}

export default reducer