// aqui estará todos os componentes e estilizações da pagina de projetos
import styled from "styled-components";

export const Container = styled.div`
    padding: 2em;
    padding-bottom: 50px;

`;
export const Projetos = styled.div`
    margin: 0 auto;  
    display: flex;
    justify-content: center;
    align-items: start;
    width: 90vw;
    height: 50vh;

    flex-wrap: wrap;
`;
export const Footer = styled.footer`
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    color: #303030;
    background-color: #f5f5f5;
    p{
        margin: 0 auto;
        padding: 1em;
        font-size: 1em;
    }
    @media (max-width: 750px) {
        display: none;
    }
`;
