import { motion } from "framer-motion";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faMagnifyingGlassPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductCard = ({
  name,
  description,
  img,
  onHandleImgModal,
  productLink,
}) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="my-5 mx-auto product"
    >
      <Card className="h-100 positon-relative">
        <Card.Body
          variant="top"
          className="hover-card position-absolute top-0 start-0 h-75 d-flex flex-column justify-content-center align-items-center w-100 text-center"
        >
          <p>{name}</p>
          <ul className="d-flex flex-row justify-content-around gap">
            <li>White</li>
            <li>Red</li>
            <li>Green</li>
          </ul>
          <ul className="d-flex flex-row justify-content-between mt-3 gap">
            <Link to={`/products/${productLink}`}>
              <li>
                <FontAwesomeIcon icon={faLink} className="hover-zoom" />
              </li>
            </Link>
            <li>
              <FontAwesomeIcon
                icon={faMagnifyingGlassPlus}
                onClick={onHandleImgModal}
                className="hover-zoom"
              />
            </li>
          </ul>
        </Card.Body>

        <Card.Img variant="top" src={img} className="h-75 w-100" />

        <Card.Body className="text-sm-left">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
