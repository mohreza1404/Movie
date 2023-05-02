import '../../App.css'
import { Card } from "flowbite-react";
import { useEffect, useState } from 'react';
import { getMovieList, searchMovie } from '../../api';
import Carousels from '../Carousel/Carousel';
import Tvshows from '../TV Shows/Tvshows';
import About from '../About/About';

const Movie = () => {
    const [popularMovie, setPopularMovie] = useState([])

    useEffect(() => {
        getMovieList().then((res) => {
            return setPopularMovie(res)
        })
    }, [])


    const PopularMovieList = () => {
        return popularMovie.map((movie, i) => {
            return (
                     <Card key={i}>
                        <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="POSTER_PATH"/>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate md:overflow-clip">
                        {movie.title}
                        </h1>
                        <h5>{movie.release_date}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400 truncate md:overflow-clip">
                        {movie.overview}
                        </p>
                        <button className="btn sm:btn-sm lg:btn-sm btn-outline bg-primary">More</button>
                    </Card>
            )
        })
    }
    
    const search = async (q) => {
        if (q.length > 3){
            const query = await searchMovie(q)
            setPopularMovie(query.results)
        }
    } 

    return (
        <div>
            {/* Carousel */}
            <Carousels />
            {/* Search Movie */}
            <div className="App m-3 p-3">
            <input type="text" placeholder="Search Movie..." className="input input-bordered w-full" onChange={({target}) => search(target.value)}/>
            </div>
            {/* Text Movies Popular */}
            <div className="m-3 p-3">
              <h1 className="text-2xl font-bold" id="Movie">Movies Popular</h1>
            </div>
            {/* Movie List */}
            <div className="m-3 p-3 grid gap-x-8 gap-y-4 grid-cols-2">
            <PopularMovieList />
            </div>
            {/* Text TV Shows */}
            <div className="m-3 p-3">
              <h1 className="text-2xl font-bold" id="TV">TV Shows</h1>
            </div>
            {/* TV Show */}
            <Tvshows />
            {/* About APP*/}
            <About />
        </div>
    )
}

export default Movie;