export const REQUEST = "REQUEST"
export const SUCCESS = "SUCCESS"
export const FAILURE = "FAILURE"

export type Storage = {
   Title: string,
   Poster: string,
   Plot: string,
   imdbID: string
}

export type State = {
   data: Storage[],
   isLoading: boolean,
   error: string
}

export const StorageInitialState: Storage[] = [{
   Title: '',
   Poster: '',
   Plot: '',
   imdbID: ''
}]

export const initialState: State = {
   data: [] as Storage[],
   isLoading: false,
   error: ''
}

type RequestAction = {
   type: typeof REQUEST
}

type SuccessAction = {
   type: typeof SUCCESS,
   payload: Storage[]
}

type FailureAction = {
   type: typeof FAILURE,
   error: string
}

export type Action = | RequestAction | SuccessAction | FailureAction