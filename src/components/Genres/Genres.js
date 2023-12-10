import { useEffect, useState } from "react";

export default function Genres({ genres }) {

    return (
        <div className="container-genres">
            {genres.map(element => (
                <span key={element.id} >{element.name}</span>
            ))}
        </div>
    );
}
