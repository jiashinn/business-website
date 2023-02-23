import { Container } from "react-bootstrap";

const Header = ({ title, subTitle }) => {
  return (
    <Container
      fluid
      className="d-flex flex-column align-items-center justify-content-between bg-light flex-md-row justify-content-md-around"
    >
      <h2 className="py-4">{title}</h2>
      <p>
        Home <span className="mx-2">&#8250;</span>
        {subTitle}
      </p>
    </Container>
  );
};

export default Header;
