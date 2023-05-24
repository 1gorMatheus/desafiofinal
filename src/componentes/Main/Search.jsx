import axios from "axios";
import { useEffect, useState } from "react";
import { Filmes, Titulo } from "./styles/FPStyle";
import FilmItem from "./FilmItem";

function Search({input}) { 
    const [filmesFiltrados, setFilmesFiltrados]  = useState([])
    const [pages, setPages] = useState(1);
    const [totalDePaginas, setTotalDePaginas] = useState(1);
    useEffect(()=>{
        getFilmesFiltrados()
    },[input, pages])

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query=${input}&include_adult=false&language=en-US&page=${pages}`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDY0ZWRlNjI5YWY5MDAxMTQ3ZjZiNTBhYTdmOWI0ZSIsInN1YiI6IjY0NjI4ZmJjYzM5MGM1MDE1M2Q3ODU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-Gxeb-ABdYoH11hsXdlY5jyJJlAi4U9jt25SXpJ9-4'
        }
      };

    const getFilmesFiltrados = async ()=>{
        await axios.request(options)
        .then(response=>{
            const allApi = response.data.results.map((item) => {
                return {
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    ano: item.release_date.split('').splice(0,4).join(''),
                }
            })
            setFilmesFiltrados(allApi);
            // console.log(response.data.total_pages);
            setTotalDePaginas( response.data.total_pages);
        }).catch(error => alert(`desculpe, houve um falha ${error}`))
    }


    console.log(pages);
    console.log(totalDePaginas);


  return (
    <>
    {filmesFiltrados.length > 0 ? 
        <Titulo>Resultados de sua pesquisa &quot;{input}&quot;</Titulo> 
        :  <Titulo style={{textAlign:"center", margin: 0, padding: "100px 0px"}} >Nada Foi encontrado</Titulo>}
    <Filmes>
        {filmesFiltrados.map((item, index )=> (
          <>
          <Filmes>

            <FilmItem item={item} key={index}  />
          </Filmes>
           
          </>
        ))}
        
    </Filmes>
    <button
          onClick={() => setPages(pages >= 1 && pages < 42 ? pages + 1 : 42)}
        >
          <h1>{parseInt(pages)}</h1> Próximo
        </button>
        <button
          onClick={() => setPages(pages >= 1 && pages < 42 ? pages + 1 : 42)}
        >
          <h1>{parseInt(pages + 1)}</h1> Próximo
        </button>
        <button
          onClick={() => setPages(totalDePaginas)}
        >
          <h1>{totalDePaginas}</h1> ultima
        </button>
    </>
  );
}

export default Search;
