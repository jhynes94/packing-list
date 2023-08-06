import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Packing App</Navbar.Brand>
        <Navbar.Text>For all your packing needs.</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default TopNav;
