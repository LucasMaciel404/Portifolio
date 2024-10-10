import MyCard from "../components/MyCard";
import infoBooks from './../components/img/infobooks.png';
import barberGuide from './../components/img/barber.png';
import slideExercise from './../components/img/moda.png';
import audioToText from './../components/img/acerte_o_numero.png';
import digitalMenu from './../components/img/cardapio.png';
import digitalStore from './../components/img/store.png';
import souMais from './../components/img/soumais.png';
import { Container, Projetos, Footer } from './styles/projects';

function Projects() {

    return (
        <Container>

            <h1 data-aos="fade-left">Projetos: </h1>
            <Projetos>
                <MyCard
                    name={'Barber Guide'}
                    img={barberGuide}
                    githube={'#'}
                    vercel={'https://barber-guide.web.app/'}
                    discription={'Projeto criado para marcar horário com barbeiros e acompanhar em tempo real a fila de espera'}
                />
                <MyCard
                    name={'Digital Store'}
                    img={digitalStore}
                    githube={'https://github.com/LucasMaciel404/geracao-tec-store.git'}
                    vercel={'https://geracao-tec-store.vercel.app/'}
                    discription={'Frontend de uma loja online, onde é possível visualizar e filtrar produtos por categorias'}
                />
                <MyCard
                    name={'Sou Mais Landing Page'}
                    img={souMais}
                    githube={'https://github.com/LucasMaciel404/Guia-Sou-Plus.git'}
                    vercel={'https://guia-sou-plus.vercel.app/'}
                    discription={'Landing page criada para apresentar uma nova plataforma de gestão para a empresa Sou Mais'}
                />
                <MyCard
                    name={'Slide Exercise'}
                    img={slideExercise}
                    githube={'https://github.com/LucasMaciel404/ladinpage-Moda.git'}
                    vercel={'https://ladinpage-moda.vercel.app/'}
                    discription={'Uma landing page que criei para exercitar a criação de slides animados'}
                />
                <MyCard
                    name={'Audio to Text Number Guessing Game'}
                    img={audioToText}
                    githube={'https://github.com/LucasMaciel404/Acerte-o-numero.git'}
                    vercel={'https://acerte-o-numero-iota.vercel.app/'}
                    discription={'Site criado para converter áudio em texto e realizar um jogo de adivinhação de número sorteado'}
                />
                <MyCard
                    name={'Digital Menu'}
                    img={digitalMenu}
                    githube={'https://github.com/LucasMaciel404/Cardapio-digital.git'}
                    vercel={'https://cardapio-digital-d8g81rdjl-lucasmaciel404s-projects.vercel.app/'}
                    discription={'Cardápio digital interativo para restaurantes e bares, com visual atraente e fácil de usar'}
                />
            </Projetos>
        </Container>
    );
}

export default Projects;
