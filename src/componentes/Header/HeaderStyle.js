import styled from "styled-components";
import Avatar from "./../../assets/Imagens/AVTR-217@2x.png";



export const HeaderStyle = styled.header`
  height: 90%; 
nav{
    padding: 15px 35px;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    backdrop-filter: blur(10px);
    box-shadow: 2px 1px 11px #000000;
    z-index: 100;
    ul{
        width: 318.9px;
    }
    ul{
        display: flex;
        list-style:none;
        gap: 15px;
        color:#FFFFFF;
        button{
            padding: 10px 35px;
            border-radius: 25px;
            color:#FFFFFF;
            cursor: pointer;
            border: none;
            background-color: transparent;
            transition: all 0.3s ease-in-out 0s;
            &:hover{
                background-color: #747474;
                box-shadow: 2px 6px 11px #0000005C;
            }
        }
    };
    
}
`;
export const Banner = styled.div`
         display: flex;
         align-items: flex-end;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100vh;
        width: 100%;
        background-image: url(${Avatar});
        background-attachment: fixed;
        
        
    
`
export const DescricaoBanner = styled.div`
                width:100%;
                height: 50%;
                padding:0px 110px;
                display: flex;
                justify-content: flex-start;
                flex-direction:column;
                color:#ffffff;
                gap:5px;
                background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%) 0% 0% no-repeat padding-box padding-box transparent;
                span{
                    font-size: 14px;
                    line-height: 23px;
                }
                p{
                    max-width: 512px;
                    font-size: 15px;
                    line-height: 23px;
                    font-weight: 300;
                }
        
`



export const Nota = styled.div`

    display: flex;
    gap:15px;  
    align-items: center;
    h1{
        font-size:2rem;
        small{
            font-size: 1rem;
        }
    }
   
`

export const Botoes = styled.div`
display: flex;
gap: 30px;
margin: 20px 0 0 0;
`

export const ButtonPlay = styled.button`
cursor: pointer;
padding: 15px 35px;
display: flex;
align-items: center;
gap: 20px;
color: #ffffff ;
background-color: #D53A00;
border-radius: 25px;
font-weight: 600;
 font-size: 1rem;
 box-shadow: 2px 6px 11px #0000005C;
 transition: ease-in-out 0.2s;
 &:hover {
    transform: scale(1.09);
    background-color:#aa2e00;
  }
`
export const BottonTrailer = styled.button `
cursor: pointer;
padding: 15px 35px;
display: flex;
align-items: center;
gap: 20px;
color: #ffffff ;
background-color: #747474;
border-radius: 25px;
font-weight: 600;
 font-size: 1rem;
 box-shadow: 2px 6px 11px #0000005C;
 transition: ease-in-out 0.2s;
 &:hover {
    transform: scale(1.09);
    background-color:#5a5a5a;
  }
`