import { useEffect, useRef } from "react"
import { useState } from "react"
import { getDetails, getImages, searchMovie } from "../api/movies"
import Header from "../components/header/Header";
import Genres from "../components/Genres/Genres";
import "./movie.css";

export default function Movie() {

    const urlParams = new URLSearchParams(window.location.search)
    const id = urlParams.get('id')

    const [movie, setMovie] = useState()
    const inputSearch = useRef(false)
    const [searchMovies, setSearchMovies] = useState()
    const [loading, setLoading] = useState(true)


    async function fetchMovie() {
        try {
            const api = await getDetails(id)
            setMovie(api)
            setLoading(false)
        } catch (error) {
            console.log({ message: "Erro ao buscar dados da API!" })
        }
    }

    useEffect(() => {
        fetchMovie()
    }, [])


    function transformNumber(e) {
        const formatMoeda = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
        return formatMoeda.format(e)
    }

    async function searchFilm() {
        const api = await searchMovie(inputSearch.current.value);
        let filterMovies = api.results.filter(element => {
            return element.title.toLowerCase().includes(inputSearch.current.value.toLowerCase())
        })
        setSearchMovies(filterMovies)
    }


    return (
        <div>
            <Header />
            <a href="/">Voltar</a>
            <section>
                <div className="search-bar">
                    <input type='text' name='' onKeyUp={searchFilm} ref={inputSearch} />
                    <div className="search-bar-movies">
                        {searchMovies &&
                            searchMovies.map(element => (
                                <a href={`/movie?id=${element.id}`} key={element.id}>
                                    <img src={`https://image.tmdb.org/t/p/w200${element.poster_path}`} alt="Poster do filme" />
                                    {element.title}
                                </a>
                            ))
                        }
                    </div>
                </div>


                {loading ? <p>Carregando...</p> : ""}
                {movie &&
                    <div className="movie-content">
                        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="Poster do filme" />
                        <div className="movie-data">
                            <h1>{movie.title}</h1>
                            <label>{movie.tagline}</label>
                            <div className="genres">
                                {movie.genres.map(element => (
                                    <span key={element.id}>{element.name}</span>
                                ))}
                            </div>
                            <p><b>Descrição:</b></p>
                            <p>{movie.overview}</p>
                            <div className="details">
                                <span><b>Tempo:</b> <br /> {movie.runtime} min</span>
                                <span><b>Rating:</b> <br /> {movie.vote_average.toFixed(1)}</span>
                                <span><b>Data:</b> <br /> {movie.release_date.split('-').reverse().join('/')}</span>
                                <span><b>Renda:</b> <br /> {transformNumber(movie.revenue)}</span>
                                <span><b>Custo:</b> <br /> {transformNumber(movie.budget)}</span>
                            </div>
                            <div className="images">

                            </div>
                            <div className="site">
                                <p><b>Site:</b></p>
                                <a href={movie.homepage} target='_blank'>{movie.homepage}</a>
                            </div>
                            <p className="production-title"><b>Produção:</b></p>
                            <div className="production">
                                {movie.production_companies.map(element => (
                                    <div key={element.id} className="company">
                                        <p>{element.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }

            </section>
        </div>
    )
}