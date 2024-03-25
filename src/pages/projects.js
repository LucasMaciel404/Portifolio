import MyCard from "../components/MyCard";
import infoBooks from './../components/img/infobooks.png'
import booksapi from './../components/img/swagger.png'
import emDev from './../components/img/emDev.png'
import { Container, Projetos, Footer } from './styles/projects'

function Projects() {

    return (
        <Container >

            <h1 data-aos="fade-left">Projetos: </h1>
            <Projetos >
                <MyCard name={'Info Books'} img={infoBooks} githube={'https://github.com/LucasMaciel404/ReadBooks'} vercel={'https://read-books-puce.vercel.app/'} discription={'Projeto criado com o intuito de consumo do BooksAPI (API de livros criada por mim) e mostrar os livros de uma forma mais visual'} />
                <MyCard name={'Books API'} img={booksapi} githube={'https://github.com/LucasMaciel404/Books-API'} vercel={'https://booksapi-o7wo.onrender.com/doc/'} discription={'Este projeto consiste no desenvolvimento de uma API RESTful construída com Node.js e Express, integrada a um banco de dados PostgreSQL. O objetivo principal é fornecer uma interface programática para realizar operações CRUD (Create, Read, Update, Delete) em uma base de dados específica, possibilitando a manipulação de registros.'} />
                <MyCard name={'Agenda de Contatos'} img={emDev} githube={'https://github.com/LucasMaciel404/Agenda-de-contatos.git'} vercel={'#'} discription={'Agenda de contatos com login e cadastro de usuarios com compatibilidade a navegadores mais antigos, tratamento de erros e proteção a ataque CSRF'} />
            </Projetos>
            <Footer><p> {'<'} Este portifolio é um projeto responsivo feito em React e Bootstrap. {'/>'} </p></Footer>
        </Container>
    )
}

export default Projects;