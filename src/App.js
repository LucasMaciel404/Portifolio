// import styled from 'styled-components';
import './App.css';
import Intro from './components/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import { styled } from 'styled-components';

function App() {
  const Container = styled.div``;
  return (
    <Container>
      <Intro/>
    </Container>
  );
}

export default App;
