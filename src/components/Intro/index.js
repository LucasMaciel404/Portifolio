import styled from "styled-components";
// import './style.css'
function Intro() {

    const Container = styled.div`
        width: 100vw;
        height: 90vh;
        color: white;
    
        overflow: hidden;
        
        background: linear-gradient(-45deg, #000, #201658, #1D24CA, #23d5ab, #201658, #000000);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
    
          
        @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
        }
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
            color: white;
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
                    <div className="row subtitulo">Desenvolvedor: Full-Stack</div>
                </div>

            </Title>
        </Container>


    )
}

export default Intro;