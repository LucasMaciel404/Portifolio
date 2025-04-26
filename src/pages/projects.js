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
                    discription={'Projeto criado para divulgar, buscar e marcar horário com barbeiros. Além da possibilidade de gerir clientes'}
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
                    discription={'Landing page criada para Sou Energy, intuito de apresentar uma nova ferramenta'}
                />
                <MyCard
                    name={'Slide Exercise'}
                    img={slideExercise}
                    githube={'https://github.com/LucasMaciel404/ladinpage-Moda.git'}
                    vercel={'https://ladinpage-moda.vercel.app/'}
                    discription={'Usando css para aprender a criar animações e slides'}
                />
                <MyCard
                    name={'Acerte o numero'}
                    img={audioToText}
                    githube={'https://github.com/LucasMaciel404/Acerte-o-numero.git'}
                    vercel={'https://acerte-o-numero-iota.vercel.app/'}
                    discription={'Mini game de adivinhação criado para converter áudio em texto'}
                />
            </Projetos>
        </Container>
    );
}

export default Projects;
