import axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_API


export const getMovieList = async() => {
    const movie = await axios.get(`${baseURL}/movie/upcoming?page=1&api_key=${apiKey}`)
    return movie.data.results
    // console.log({ MovieList : movie})
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseURL}/search/movie?page=1&query=${q}&api_key=${apiKey}`)
    return search.data
} 
