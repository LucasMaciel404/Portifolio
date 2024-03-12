import styled from "styled-components";
import './style.css'
function Intro() {

    const Container = styled.div`
        width: 100vw;
        height: 80vh;
        color: white;

        background: radial-gradient(ellipse at bottom, #0d1d31 0%, #0c0d13 100%);
    
        overflow: hidden;
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
                    <div className="row subtitulo">Desenvolvedor: Full-Stack</div>
                </div>

            </Title>
            <div className="stars">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
            </div>
        </Container>


    )
}

export default Intro;