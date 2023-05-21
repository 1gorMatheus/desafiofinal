import axios from "axios";
import NavGenero from "./NavGenero";
import Carrousel from "./Carrousel";
import { useEffect, useState } from "react";
import { Filmes } from "./styles/FPStyle";
import Search from "./Search";

function FilmesPopular() {
    const [mode, setMode] = useState(false) ;
    const [input, setInput] = useState('');
    const [filmesPopular, setFilmesPopular] = useState([])

    useEffect(()=>{
        getFilmesPopular();
    }, []);

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDY0ZWRlNjI5YWY5MDAxMTQ3ZjZiNTBhYTdmOWI0ZSIsInN1YiI6IjY0NjI4ZmJjYzM5MGM1MDE1M2Q3ODU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-Gxeb-ABdYoH11hsXdlY5jyJJlAi4U9jt25SXpJ9-4'
        }
      };
      const getFilmesPopular = async () => {
       await axios
        .request(options)
        .then(function (response) {
            const Api = response.data.results.map((item)=>{
                return{
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                }
            })
          setFilmesPopular(Api);
          console.log(Api);
        })
        .catch(function (error) {
          console.error(error);
        });
        console.log(filmesPopular);
      }
      


  return (
    <>
       <NavGenero setMode={setMode} mode={mode} setInput={setInput} />
       {input.length === 0? ( 
        <>
          <Carrousel/>
          <Filmes>
            {filmesPopular && filmesPopular.map((item, index)=>(
                <article key={index} >
                    <img src={item.image} alt={item.title} />
                    <h3>Name: {item.title}</h3>
                </article>
            ))}
        </Filmes>
        </>
       ): (<Search input={input} />)}
    </>
  );
}

export default FilmesPopular;
