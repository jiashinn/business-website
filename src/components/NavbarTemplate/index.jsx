import Container from "react-bootstrap/Container";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavbarTemplate = () => {
  return (
    <Navbar bg="warning" expand="md">
      <Container
        fluid
        className="flex-md-column align-items-md-center h-md-100 justify-content-sm-around"
      >
        <Link to="/">
          <Navbar.Brand>
            <img
              title="Back to homepage"
              src={logo}
              alt=" logo"
              className="w-25 w-md-80 d-block mx-md-auto"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-4" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column text-center">
            <Link to="/">首頁</Link>
            <Link to="/products">風格</Link>
            <Link to="/colors">色系</Link>
            <Link to="/contactus">聯絡我們</Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="#boxingclub" className="mb-md-3 md-hidden">
          BOXING CLUB
        </Nav.Link>
      </Container>
    </Navbar>
  );
};

export default NavbarTemplate;
