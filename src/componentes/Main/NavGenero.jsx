import { BsSearch } from 'react-icons/bs';

import { MenuGenero, Genero } from "./styles/NavGeneroStyle";
// import { useState } from 'react';

function NavGenero({setMode, mode, setInput}) {
  return (
    <>
        <MenuGenero>
            <Genero>
                <li><a href="">Popular</a></li>
                <li><a href="">Drama</a></li>
                <li><a href="">Ação</a></li>
                <li><a href="">Aventura</a></li>
                <li><a href="">Comédia</a></li>
                <li><a href="">Crime</a></li>
                <li><a href="">Fantasia</a></li>
                <li><a href="">Família</a></li>
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
