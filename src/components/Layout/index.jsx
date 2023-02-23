import { Container } from "react-bootstrap";
import NavbarTemplate from "../NavbarTemplate";

const Layout = ({ children }) => {
  return (
    <Container fluid className="d-md-flex">
      <NavbarTemplate />
      <div className="w-100">{children}</div>
    </Container>
  );
};
export default Layout;
