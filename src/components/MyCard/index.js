import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import git from './../svg/git.svg'
import styled from 'styled-components';
import './style.css';

function MyCard({ img, name, discription, githube, vercel }) {
    const Scroll = styled.p` 
    min-height: 100px;
    max-height: 100px; /* Altura máxima do parágrafo */
    overflow-y: scroll; /* Adiciona a rolagem vertical se o conteúdo exceder a altura máxima */

    `;

    return (
        <Card style={{ width: '18rem', margin: 20 }} data-aos="fade-up">
            <Card.Img variant="top" style={{ height: 100, width: 'auto', margin: 20 }} src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <Scroll>{discription}</Scroll>
                </Card.Text>
                <div className='row'>
                    <div className='col'>
                        <Button className={vercel == '#'? 'block-it': ''} variant={vercel == '#'? 'secondary' : 'primary'} href={vercel} target='_blank'> Visualizar </Button>
                    </div>
                    <div className='col'>
                        <Button className={githube == '#'? 'block-it': ''} variant={githube == '#'? 'secondary': 'dark'} href={githube} target='_blank'> <img src={git} alt='githube' /> Githube</Button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MyCard;