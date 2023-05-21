import axios from "axios";
import { useEffect, useState } from "react";
import { Filmes, Titulo } from "./styles/FPStyle";

function SearchGenreMovie({input, id}) {
    const [buscarPorGenero, setBuscarPorGenero] = useState([]);
    const [generosFiltrados, setGenerosFiltrados] = useState([]);

    useEffect(()=>{
        getSearchGenreMovie()
        filtrar()
    }, [input])

    const getSearchGenreMovie = async ()=>{
        await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=0d64ede629af9001147f6b50aa7f9b4e&query=${input}&language=en-US&include_adult=false`)
        .then((response)=>{
            const allApi = response.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                }
            })
            setBuscarPorGenero(allApi);
        }).catch(error => alert(`desculpe, houve um falha ${error}`))
        // console.log(buscarPorGenero);
    }
    const filtrar = ()=>{
        const  results = buscarPorGenero.filter((item)=>{
            if(item.genre_ids.includes(id)){
                return true;
            }else{
                return false;
            }
        });
        setGenerosFiltrados(results);
    }
    
    console.log(id)
  return (
    <>
        {generosFiltrados.length > 0 ? 
        <Titulo>Resultados de sua pesquisa &quot;{input}&quot;</Titulo> 
        :  <Titulo style={{textAlign:"center", margin: 0, padding: "100px 0px"}} >Nada Foi encontrado</Titulo>}
        <Filmes>
            {generosFiltrados && generosFiltrados.map((item, index)=>(
                <article key={index}>
                    <img src={item.image} alt={item.title} />
                    <h3>Name: {item.title}</h3>
                </article>
            ))}
        </Filmes>
    </>
  );
}

export default SearchGenreMovie;