import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <Navbar bg="warning" expand="md">
      <Container
        fluid
        className="flex-md-column align-items-md-center h-md-100 justify-content-sm-around"
      >
        <Navbar.Brand href="#home">
          <img src={logo} alt="" className="w-25 w-md-80 d-block mx-md-auto" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-4" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column text-center">
            <Nav.Link href="#home">首頁</Nav.Link>
            <Nav.Link href="#style">風格</Nav.Link>
            <Nav.Link href="#color">色系</Nav.Link>
            <Nav.Link href="#contact">聯絡我們</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#boxingclub" className="mb-md-3 md-hidden">
          BOXING CLUB
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default Header;
