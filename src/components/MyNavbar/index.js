import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">{'< Lucas Maciel />'}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/projects">Projetos</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;