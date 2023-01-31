import React, { Children } from "react";
import './Titulo.css'
function Titulo(props){
    return(
        <h2 className="texto">{props.titulo}</h2>
    )
}

export {Titulo}