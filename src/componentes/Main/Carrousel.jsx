import Carousel from "react-elastic-carousel";
import axios from "axios";
import { useEffect, useState } from "react";
import { ContainerCarrousel, Filmes } from "./styles/CarrouselStyle";


function Carrousel() {
    
    useEffect(()=>{
        getLancamentos()
    }, []);

    const breakPoints = [
        { width: 2, itemsToShow: 1, itemsToScroll: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3, itemsToScroll: 3 },
        {width:1200, itemsToShow: 5, itemsToScroll: 3}
    ]

    const [lancamentos, setLancamentos] = useState([])

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDY0ZWRlNjI5YWY5MDAxMTQ3ZjZiNTBhYTdmOWI0ZSIsInN1YiI6IjY0NjI4ZmJjYzM5MGM1MDE1M2Q3ODU5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q-Gxeb-ABdYoH11hsXdlY5jyJJlAi4U9jt25SXpJ9-4'
        }
      };
      const getLancamentos = async ()=> {
        await axios.request(options)
        .then(function (response) {
            const Api = response.data.results.map((item)=>{
                return{
                    ...item,
                    image: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                }
            })
            setLancamentos(Api);
          
        })
        .catch(function (error) {
          console.error(error);
        });
        
      }
      // console.log(lancamentos);
       

  return (
    <ContainerCarrousel>
        <h2>Últimos Lançamentos</h2>
        <Carousel breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={2500}
        itemPadding={[20, 10]} 
        style={{width: '98%', margin: '0 auto'}}
        >
        {lancamentos && lancamentos.map((item, index)=>(
        <Filmes key={index} >
            <img src={item.image} alt={item.original_title} style={{width: '85%'}} />
            <h3>{item.title}</h3>
        </Filmes>
        ))}
        </Carousel>
    </ContainerCarrousel>
  );
}

export default Carrousel;
