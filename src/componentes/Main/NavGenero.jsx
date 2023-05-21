import { BsSearch } from 'react-icons/bs';

import { MenuGenero, Genero } from "./styles/NavGeneroStyle";
import { Link } from 'react-router-dom';
// import { useState } from 'react';

function NavGenero({setMode, mode, setInput}) {
  return (
    <>
        <MenuGenero>
            <Genero>
                <li><Link to="/" >Popular</Link></li>
                <li><Link to="/Drama">Drama</Link></li>
                <li><Link to="/Acao">Ação</Link></li>
                <li><Link to="/Aventura"   >Aventura</Link></li>
                <li><Link to="/Comedia" >Comédia</Link></li>
                <li><Link to="/Crime" >Crime</Link></li>
                <li><Link to="/Fantasia" >Fantasia</Link></li>
                <li><Link to="/Familia" >Família</Link></li>
                <li>
                  <input className={mode === false ? 'hidden' : ''}
                  onChange={(e) => {setInput(e.target.value)}}
                   type="text"  
                   placeholder="Busque um filme"
                    />
                  <button onClick={()=>{setMode(!mode)}} ><BsSearch size={19} /></button>
                </li>
            </Genero>
        </MenuGenero>
    </>

  );
}

export default NavGenero;
