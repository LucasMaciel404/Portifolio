import styled from "styled-components";

function Intro() {

    const Container = styled.div`
        width: 100vw;
        height: 80vh;
        color: white;

        /* Add your background pattern here */
        background: rgba(29, 31, 32, 0.904)
        radial-gradient(rgba(255, 255, 255, 0.712) 10%, transparent 1%);

        background-size: 11px 11px;
        box-shadow: inset 9px 5px 96px -22px rgba(0,0,0,1);
    `;
    const Title = styled.h1`
        margin: 0 1em;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: start;
        color: white;
        text-align: start;

        
        width: 90%;
        height: 50vh;
        font-size: 4rem;

        .subtitulo{
            color: #93B1A6;
            font-size: 3rem;
        }
        @media (max-width: 400px) {
            font-size: 2rem;
            .subtitulo{
                font-size: 1rem;
            }
        }
        @media (max-width: 720px) {
            font-size: 3rem;
            .subtitulo{
                font-size: 1.3rem;
            }
        }
        `;


    return (
        <Container>
            <Title>
                <div>
                    <div className="row">Olá, meu nome é Lucas Maciel</div>
                    <div  className="row subtitulo">Desenvolvedor: Full-Stack</div>
                </div>

            </Title>
        </Container>


    )
}

export default Intro;