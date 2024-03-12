import styled from "styled-components"
import lucas from "../img/Lucas maciel.jpeg"
import Social from './../Social'
function Sobre() {
    const Container = styled.div`
    width: 100%;
    height: 85vh;
    display:flex;
    margin-bottom: 2em;
    align-items: center;
    justify-content: center;
        .info{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            margin-top: 2em;
        }
        .myInfo{
            display: flex;
            justify-content: space-aroud;
            flex-wrap: wrap;
        }
        .myInfo > div{
            width: 500px;
            margin: 2em;
            align-items: center;
        }
        p{
            font-size: 1.3em;
            text-align: justify;
        }

        h2{
            margin: 1em;
            text-align: center;
        }
        img{
            display: flex;
            margin: 0 auto;
            width: 80%;
            height: auto;
            border-radius: 50%;
        }
        @media (max-width: 1150px) {
            p{
                font-size: 1.1em;
            }
            .myInfo > div{
                width: 400px;
            }
        }
        @media (max-width: 950px) {
            p{
                font-size: 1em;
            }
            .myInfo > div{
                width: 300px;
            }
        }
        @media (max-width: 750px) {
            align-items: start;
            
            p{
                font-size: 1.3em;
            }
            .myInfo{
                justify-content: center;
            }
            .myInfo > div{
                width: 500px;
            }
        }
        @media (max-width: 500px) {
            align-items: start;
            
            p{
                font-size: 1em;
            }
            .myInfo{
                justify-content: center;
            }
            .myInfo > div{
                width: 80vw;
            }
        }
    `

    return (
        <Container id="sobreMim">
            <div>
                <div>
                    <h2 data-aos="fade-down">Ok, mas quem é o Lucas?</h2>
                </div>
                <div className="info">
                    <div className="myInfo">

                        <div data-aos="fade-right">
                            <p> Desde o ensino fundamental, desenvolvi uma paixão por programação, criando programas e jogos em Python. Essa paixão me motivou a seguir uma carreira na área.
                            <br /> Após o ensino médio, ingressei em um curso remunerado oferecido por uma empresa, onde aprendi sobre o funcionamento da web e tecnologias como PHP, SQL e Bootstrap. Ao concluir o curso, fui contratado como estagiário pela mesma empresa para trabalhar com a plataforma Fluig.</p>
                            <br />
                            <Social />
                        </div>
                        <div><img src={lucas} alt='Lucas maciel' data-aos="fade-up" /></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export default Sobre;