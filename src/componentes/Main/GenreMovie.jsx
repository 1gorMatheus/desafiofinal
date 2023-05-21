import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Filmes } from "./styles/FPStyle";
import { FilmesMain } from "./styles/MainStyled";
import NavGenero from "./NavGenero";
import SearchGenreMovie from "./SearchGenreMovie";


function GenreMovie() {
    const [mode, setMode] = useState(false) ;
    const [input, setInput] = useState('');

    const { id } = useParams();
    let query 
    switch (id) {
        case "Drama":
            query = 18;
            
            break;
        case "Acao":
             query = 28;
        
            break;
        case "Aventura":
            query = 12;
            
            break;
        case "Comedia":
            query = 35;
        
            break;
        case "Crime":
            query= 80;
            break;
        case "Fantasia":
            query = 14;
            break;
        case "Familia":
            query = 10751;
            break;
        default:
            
    }



    const[filmesGeneros, setFilmesGeneros] = useState([]);
    useEffect(()=>{
        getGenreMovie();
    },[id])


const options = {
  method: 'GET',
  url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${query}`,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDY0ZWRlNjI5YWY5MDAxMTQ3ZjZiNTBhYTdmOWI0ZSIsInN1YiI6IjY0NjI4ZmJjYzM5MGM1MDE1M2Q3ODU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-Gxeb-ABdYoH11hsXdlY5jyJJlAi4U9jt25SXpJ9-4'
  }
};

const getGenreMovie = async () => {
    await axios
     .request(options)
     .then(function (response) {
         const Api = response.data.results.map((item)=>{
             return{
                 ...item,
                 image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
             }
         })
       setFilmesGeneros(Api);
     })
     .catch(function (error) {
       console.error(error);
     });
   }

  return (
    <>
    <FilmesMain>
        <NavGenero mode={mode} setMode={setMode} setInput={setInput} />
        {input.length === 0? (
            <Filmes style={{ marginTop: "30px",}} >
            {filmesGeneros && filmesGeneros.map((item, index)=>{
                return(
                    <article key={index} >
                        <img src={item.image} alt={item.title} />
                        <h3>Name: {item.title}</h3>
                    </article>
                )
            })}
            
        </Filmes>
        ): <SearchGenreMovie input={input} id={query}/> }
    </FilmesMain>
        
    </>
  );
}

export default GenreMovie;
