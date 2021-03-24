import api from "../../service/api"
import { API_KEY } from '../../env'
import { State } from "../types/MovieTypes"

export const fetchData = async (movieName: string, page: number): Promise<State> => {
   return api.get(`/?s=${movieName}&page=${page}&apikey=${API_KEY}`)
}
