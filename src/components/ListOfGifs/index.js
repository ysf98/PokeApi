import React from 'react'
import Gif from "../Gif/Gif";
import './styles.css'

export default function ListOfGifs({gifs}){

    return <div className='ListOfGifs'>
        {
            gifs.map(({title,url,id}) =>
                <Gif 
                    key={id}
                    title={title} 
                    url={url} 
                    id={id}
                />
            )
        }
    </div>
    
}