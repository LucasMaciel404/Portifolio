// import styled from 'styled-components';
import './App.css';
import Intro from './components/Intro';
import Sobre from './components/Sobre';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';

function App() {
  const Container = styled.div``;
  return (
    <Container>
      <Intro/>
      <Sobre/>
    </Container>
  );
}

export default App;
