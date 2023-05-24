import axios from "axios";
import { useEffect, useState } from "react";
import { Filmes, Titulo } from "./styles/FPStyle";
import FilmItem from "./FilmItem";

function SearchGenreMovie({input, id}) {
    const [buscarPorGenero, setBuscarPorGenero] = useState([]);
    const [generosFiltrados, setGenerosFiltrados] = useState([]);

    useEffect(()=>{
        getSearchGenreMovie()
    }, [input, id])

    useEffect(()=>{
        filtrar()
    }, [buscarPorGenero])


    const getSearchGenreMovie = async ()=>{
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0d64ede629af9001147f6b50aa7f9b4e&query=${input}&language=en-US&include_adult=false`)
        .then((response)=>{
            const allApi = response.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    ano: item.release_date.split('').splice(0,4).join(''),
                }
            })
            setBuscarPorGenero(allApi);
        }).catch(error => alert(`desculpe, houve um falha ${error}`))
    }

    const filtrar =  ()=>{
        if(buscarPorGenero.length > 0){
            const  results = buscarPorGenero.filter((item)=>{
                if(item.genre_ids.includes(id) && item.title.toLowerCase().includes(input.toLowerCase()) ){
                    return true;
                }else{
                    return false;
                }
            });
            setGenerosFiltrados(results);
        }
    }

    
      
    
  return (
    <>
        {generosFiltrados.length > 0 ? 
        <Titulo>Resultados de sua pesquisa &quot;{input}&quot;</Titulo> 
        :  <Titulo style={{textAlign:"center", margin: 0, padding: "100px 0px"}} >Nada Foi encontrado</Titulo>}
        <Filmes>
            {generosFiltrados && generosFiltrados.map((item, index)=>(
                <FilmItem item={item} key={index}  />
            ))}
        </Filmes>
    </>
  );
}

export default SearchGenreMovie;
