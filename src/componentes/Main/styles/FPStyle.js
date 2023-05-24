import styled from "styled-components"

export const Filmes = styled.section`
    color:#ffffff;
    display: grid;
    grid-template-columns: auto auto auto auto auto ;
    width: 87%;
    margin: 0 auto;


`
export const Titulo = styled.h2`
color:#ffffff;
margin:10vh 0 5vh 7.8%;
`
export  const PaginationContainer = styled.div`
    margin: 50px 0 0px 0;
    height: 15vh;
  .pagination {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
    gap :5px;
    .page-item {
      margin-right: 5px;    
      cursor: pointer;
      
        
      &.active {
        font-weight: bold;
      }
    }

    .page-link {
     border-radius:50px;
      color:#ffffff;
      text-decoration: none;
      padding: 8px 12px;
      border: 1px solid #ddd;

      &:hover {
        background-color: #f4f4f4;
        color: #000000;
      }
    }
    .ellipsis{
      color:#ffffff;
      padding: 0px 12px;  
    }
  }
`;