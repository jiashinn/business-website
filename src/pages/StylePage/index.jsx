import { useEffect, useState } from "react";
import { Container, Modal, Nav } from "react-bootstrap";
import { getProducts } from "../../utils";
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import Header from "../../components/Header";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const StylePage = () => {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [imgModal, setImgModal] = useState("");
  const [loading, setLoading] = useState(false);

  const filtered = products.filter((product) =>
    product.category.includes(activeCategory)
  );
  const categories = [
    ...new Set(
      products.map((product) => {
        return product.category;
      })
    ),
  ];
  console.log(categories);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res);
        console.log(products);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleImgModal = (img) => {
    setImgModal(img);
  };

  const closeImgModal = () => {
    setImgModal("");
  };

  return (
    <Layout>
      <Header title="風格" subTitle="風格" />
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Skeleton count={10} height={40} width={400} circle={false} />
        </div>
      ) : (
        <>
          <Nav className="d-flex justify-content-center align-items-center pt-5">
            <Nav.Item className="border-bottom border-light">
              <Nav.Link
                onClick={() => {
                  setActiveCategory("");
                }}
              >
                All
              </Nav.Link>
            </Nav.Item>
            {categories &&
              categories.map((category, i) => {
                return (
                  <Nav.Item key={i} className="border-bottom border-light">
                    <Nav.Link
                      onClick={() => {
                        setActiveCategory(category);
                      }}
                    >
                      {category}
                    </Nav.Link>
                  </Nav.Item>
                );
              })}
          </Nav>
          <Container className="postion-relative">
            <motion.div layout className="d-flex flex-md-row flex-wrap">
              <AnimatePresence>
                {filtered &&
                  filtered.map((item) => {
                    return (
                      <ProductCard
                        onHandleImgModal={() => {
                          handleImgModal && handleImgModal(item.images[0]);
                        }}
                        key={item.id}
                        img={item.images[0]}
                        name={item.title}
                        description={item.description}
                        productLink={item.id}
                      />
                    );
                  })}
              </AnimatePresence>
            </motion.div>
            <Modal show={imgModal} fullscreen>
              <Modal.Header>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="position-absolute top-0 end-0 fa-2x"
                  onClick={closeImgModal}
                />
              </Modal.Header>
              <Modal.Body className="d-flex justify-content-center align-items-center">
                <img src={imgModal} />
              </Modal.Body>
            </Modal>
          </Container>
        </>
      )}
    </Layout>
  );
};

export default StylePage;
