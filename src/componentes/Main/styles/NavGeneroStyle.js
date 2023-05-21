import styled from "styled-components"

export const MenuGenero = styled.nav`
    background-color: #000000;
`
export const Genero = styled.ul`
    padding: 10px 35px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    a{
        color:#ffffff;
        transition: all 0.3s ease-in-out 0s;
        &:hover{
            color:#cccccc;
        }
    }
    button{
     padding: 10px 35px;
    border-radius: 25px;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    background-color: transparent;
    transition: all 0.3s ease-in-out 0s;
    &:hover{
            color:#cccccc;
        }
    }
    input{
     border: none;
    border-radius: 20px;
    margin-top: 10px;
    outline: none;
    padding: 16px;
    }
    input.hidden {
        display: none;
    }

`