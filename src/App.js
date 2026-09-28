// import styled from 'styled-components';
import './App.css';
import Intro from './components/Intro';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './pages/projects';
import SobreMim from './pages/SobreMim';
import { styled } from 'styled-components';

function App() {
  const Container = styled.div``;
  return (
    <Container>
      <Intro/>
      <SobreMim/>
      <Projects/>
    </Container>
  );
}

export default App;
