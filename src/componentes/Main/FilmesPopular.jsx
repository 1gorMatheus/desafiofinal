import axios from "axios";
import NavGenero from "./NavGenero";
import Carrousel from "./Carrousel";
import { useEffect, useState } from "react";
import { Filmes, PaginationContainer, Titulo } from "./styles/FPStyle";
import Search from "./Search";
import FilmItem from "./FilmItem";
import ReactPaginate from "react-paginate";

function FilmesPopular() {
    const [mode, setMode] = useState(false) ;
    const [input, setInput] = useState('');
    const [filmesPopular, setFilmesPopular] = useState([]);
    const [pages, setPages] = useState(1)
    // const [totalDePaginas, setTotalDePaginas] = useState(1);

    useEffect(()=>{
        getFilmesPopular();
    }, [pages]);

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pages}`,
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
                    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    ano: item.release_date.split('').splice(0,4).join(''),
                }
            })
          setFilmesPopular(Api);
          console.log(response.data.total_pages);
          // setTotalDePaginas( 500);
        })
        .catch(function (error) {
          console.error(error);
        });
        
      }
      
      console.log(pages);

  return (
    <>
       <NavGenero setMode={setMode} mode={mode} setInput={setInput} />
       {input.length === 0? ( 
        <>
          <Carrousel/>
          <Titulo>Em Alta</Titulo>
          <Filmes>
            {filmesPopular && filmesPopular.map((item, index)=>(
                <FilmItem item={item} key={index}  />
            ))}
        </Filmes>
        </>
       ): (<Search input={input} />)}
       <PaginationContainer>

          <ReactPaginate
          previousLabel="Anterior"
          nextLabel="Último"
          breakLabel="..."
          pageCount={500}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={(e)=>{console.log(parseInt(e.selected + 1)); setPages(parseInt(e.selected + 1)) }}
          containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        activeClassName="active"
        breakClassName='ellipsis'
          />
       </PaginationContainer>
    </>
  );
}

export default FilmesPopular;
