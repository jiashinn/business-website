import { Container } from "react-bootstrap";
import Header from "../Header";

const Layout = ({ children }) => {
  return (
    <Container fluid className="d-md-flex">
      <Header />

      <div className="w-100">{children}</div>
    </Container>
  );
};

export default Layout;
