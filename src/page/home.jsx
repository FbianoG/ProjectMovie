import { useState, useEffect } from "react";
import {getPopular, getTop , getUpcoming} from "../api/movies";
import Header from "../components/header/Header";
import MainBanner from "../components/sections/MainBanner";
import Card from "../components/card/Card";
import "./home.css"




export default function Home() {
    const [popularMovies, setPopularMovies] = useState([])
    const [topMovies, setTopMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])

    useEffect(() => {
        async function fetchMovies() {
            const apiPopular = await getPopular()
            const apiTop = await getTop()
            const apiUpcoming = await getUpcoming()

            setPopularMovies(await apiPopular)
            setTopMovies(await apiTop)
            setUpcomingMovies(await apiUpcoming)
            
        }
        fetchMovies()
    }, [])

    useEffect(() => {
       console.log(popularMovies);
    }, [popularMovies])

    return (
        <div>
            <Header />
            <section>
                <h1>Principais</h1>
                <div className="container-banners">
                    {popularMovies.slice(0,4).map(element =>{ return <MainBanner {...element}/>})}
                </div>
            </section>
            <section>
                <h1>Em alta</h1>
                <div className="container-alts">
                {popularMovies.slice(4).map(element =>{ return <Card {...element}/>})}
                </div>
            </section>
            <section>
                <h1>Mais votados</h1>
                <div className="container-alts">
                {topMovies.map(element =>{ return <Card {...element}/>})}
                </div>
            </section>
            <section>
                <h1>Lançamentos</h1>
                <div className="container-alts">
                {upcomingMovies.map(element =>{ return <Card {...element}/>})}
                </div>
            </section>
            <footer>
                
            </footer>
        </div>
    )
}