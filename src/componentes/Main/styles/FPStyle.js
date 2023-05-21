import styled from "styled-components"

export const Filmes = styled.section`
    color:#ffffff;
    display: grid;
    grid-template-columns: auto auto auto auto auto ;
    width: 87%;
    margin: 0 auto;
    article{
        width: 233.644px;
        padding: 20px 10px;
        display: flex;   
        flex-direction: column;
        align-items: center;
        img{
            width: 85%;
        }
        h3{
            margin: 0 auto;
            padding: 20px 10px;
        }
    }

`
export const Titulo = styled.h2`
color:#ffffff;
margin:10vh 0 5vh 7.8%;
`