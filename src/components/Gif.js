import React from "react";
import './Gif.css'
export default function Gif({title,url}){
    return(
        <div className="Gif">
            <h4>{title}</h4>
            <img alt={title} src={url}/>
        </div>
    )
}