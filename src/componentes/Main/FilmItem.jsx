import { Filmes } from "./styles/FilmItemStyle";


function FilmItem({item}) {
  return (
    <>
        <Filmes>
            <img src={item.image} alt={item.original_title} style={{width: '85%'}} />
            <div >
                <h3>{item.title}</h3>
                <small>{item.ano}</small>
            </div>
        </Filmes>
    </>
  );
}

export default FilmItem;
