export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export type State = {
   data: OMDBResponse,
   isLoading: boolean,
   error: string
}

export type OMDBResponse = {
   Response: boolean,
   Search: MovieObject[],
   totalResults: number
}

export type MovieObject = {
   Title: string,
   Year: string,
   Rated: string,
   Released: string,
   Runtime: string,
   Genre: string,
   Director: string,
   Writer: string,
   Actors: string,
   Plot: string,
   Poster: string,
   Ratings: { Source: string, Value: string }[],
   Metascore: string,
   imdbRatings: string,
   imdbVotes: string,
   imdbID: string,
   Type: string,
   DVD: string,
   BoxOffice: string,
   Production: string,
   Website: string,
   Response: boolean,
}

export const OMDBResponseInitialState = {
   Response: false, 
   Search: [] as MovieObject[], 
   totalResults: 0
}

export const initialState: State = {
   data: OMDBResponseInitialState,
   isLoading: false,
   error: ''
}

type RequestAction = {
   type: typeof REQUEST
}

type SuccessAction = {
   type: typeof SUCCESS,
   payload: OMDBResponse
}

type FailureAction = {
   type: typeof FAILURE,
   error: string
}

export type Action = | RequestAction | SuccessAction | FailureAction
// export type Action = | { type: typeof REQUEST } | {
//    type: typeof SUCCESS,
//    payload: OMDBResponse[]
// } | {
//    type: typeof FAILURE,
//    error: string
// }