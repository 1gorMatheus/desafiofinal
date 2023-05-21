import axios from "axios";
import { useEffect, useState } from "react";
import { Filmes } from "./styles/FPStyle";

function Search({input}) { 
    useEffect(()=>{
        getFilmesFiltrados()
    },[input])
    // const query = input.toLowerCase();
    const [filmesFiltrados, setFilmesFiltrados]  = useState([])
    const getFilmesFiltrados = async ()=>{
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0d64ede629af9001147f6b50aa7f9b4e&query=${input}&language=en-US&include_adult=false`)
        .then(response=>{
            const allApi = response.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                }
            })
            setFilmesFiltrados(allApi);
            console.log(allApi);
        }).catch(error => alert(`desculpe, houve um falha ${error}`))
    }
  return (
    <>
    <Filmes>
        {filmesFiltrados.map((item, id )=> (
                    <article key={id}>
                        <img src={item.image} alt={item.title} />
                        <h3>Name: {item.title}</h3>
                    </article>
        ))}
    </Filmes>
         
    </>
  );
}

export default Search;
