import { useState, useEffect } from "react";
import "./MainBanner.css"


export default function MainBanner(props) {
    console.log("esse é:", props)

    return (
        <a href={`/movie?id=${props.id}`} className="card-banner" key={props.id}>
            <img src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`} alt="" />
            <div className="data-banner">
                <h3>{props.title}</h3>
                <hr />
                <div className="legends-banner">
                    <label>{props.release_date}</label>
                    <label>{props.vote_average.toFixed(1)}</label>
                </div>
            </div>
        </a>
    )
}