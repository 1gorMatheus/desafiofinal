import { BsSearch } from 'react-icons/bs';
import { Banner, HeaderStyle, DescricaoBanner, Nota,Botoes, ButtonPlay, BottonTrailer } from './HeaderStyle';

import Logo from "./../../assets/Logo.svg"
import Star from './../../assets/Imagens/Icon awesome-star.svg'
import logoImdb from './../../assets/Imagens/IMDB_logo.png'
import Play from './../../assets/Imagens/play.png'
import faixaDeCinema from './../../assets/Imagens/faixa de cinema.png'

function Header() {
    return (
        <>
            <HeaderStyle>
                <nav>
                    <ul>
                        <li><img src={Logo} alt="Logo" /></li>
                    </ul>
                    <ul className='serieFilme' >
                        <li><button >Séries</button></li>
                        <li><button>Filmes</button></li>
                    </ul>
                    <ul>
                        <li><button><BsSearch size= {19} /></button></li>
                        <li><button>Filtro</button></li>
                        <li><button>Login</button></li>
                    </ul>
                </nav>
                <Banner>
                    <DescricaoBanner>
                        <h1>Avatar: O Caminho da Água</h1>
                        <span>3hr 23 min | Fantasia, Família | 2023</span>
                        <Nota>
                            <img src={Star} alt="Estrela" width="35px" />
                            <h1>9,9<small>/10</small></h1>
                            <img src={logoImdb} alt="logo do IMDB" width="40" height="20" />
                        </Nota>
                        <p>Após formar uma família, Jake Sully e Ney&apos;tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.</p>
                        <Botoes>
                        <ButtonPlay><img src={Play} alt="PLay" width="25px" /> Assistir Agora</ButtonPlay>
                        <BottonTrailer><img src={faixaDeCinema } alt="Faixa De Cinema" width="25px" /> Trailer</BottonTrailer>
                        </Botoes>
                    </DescricaoBanner>
                </Banner>
            </HeaderStyle>
        </>
    );
}

export default Header;
