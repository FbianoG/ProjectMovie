import "./Card.css";
export default function Card(props) {
    return (
        <a href={`/movie?id=${props.id}`} key={props.id} className="card">
            <img src={`https://image.tmdb.org/t/p/w400/${props.backdrop_path}`} alt="" />
            <h4>{props.title}</h4>
            <label>{props.release_date.split('-').reverse().join("/")}</label>
            <br/>
            <label>Rating: {props.vote_average.toFixed(1)}</label>
        </a>
    )
}