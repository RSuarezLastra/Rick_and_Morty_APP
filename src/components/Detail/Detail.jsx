import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios"

const Detail = () => {

    const {detailId} = useParams();
    const [character,setCharacter] = useState({});

    useEffect(()=> { 
        const url = "https://rickandmortyapi.com/api/character/";

        axios(`${url}${detailId}`).then((response) => 
        setCharacter(response.data));
    },[])

    return(
        <div>
            {character.name ? 
            (<>
             <h2>{character.name}</h2>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt="img" />
            </>)
            : (<h2>loading...</h2>)} 
           
        </div>
    )
}

export default Detail;