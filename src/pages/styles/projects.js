// aqui estará todos os componentes e estilizações da pagina de projetos
import styled from "styled-components";

export const Container = styled.div`
    padding: 2em;
`;
export const Projetos = styled.div`
    margin: 0 auto;  
    display: flex;
    justify-content: center;
    align-items: start;
    width: 80vw;
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
    p{
        margin: 0 auto;
        padding: 1em;
        font-size: 1em;
    }
`;