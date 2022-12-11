import React, {useState} from "react";
import { UseFetch } from "../useFetch";
import { Cards } from "../cards/Cards";

const Pokemon = ()=>{
    const[url,setUrl]=useState('https://pokeapi.co/api/v2/pokemon')
    const estado = UseFetch(url)
    const {loading,data}=estado
    loading? console.log('Loading...'):console.log(data.results)


    return(
        <div>
            <h1>Pokemons</h1>
            {
                loading?
                <h1>Loading</h1>
                :
                <Cards results={data.results}/>
            }
        </div>
    )
}

export default Pokemon