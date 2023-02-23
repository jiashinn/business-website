import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { getProducts, getSingleProduct } from "../../utils";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import ProductCard from "../../components/ProductCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetails = () => {
  const { productId } = useParams();
  const [displayImg, setDisplayImg] = useState("");
  const [product, setProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDisplayImg = (Img) => {
    setDisplayImg(Img);
  };

  const handlePrevImg = () => {
    const currentIndex = images.indexOf(displayImg);
    console.log(currentIndex);
    if (!currentIndex) {
      setDisplayImg(images[0]);
    } else {
      setDisplayImg(images[currentIndex - 1]);
    }
  };
  const handleNextImg = () => {
    const currentIndex = images.indexOf(displayImg);
    console.log(currentIndex);
    if (currentIndex === images.length - 1) {
      setDisplayImg(images.at(-1));
    } else {
      setDisplayImg(images[currentIndex + 1]);
    }
  };

  const SubTitleText = () => {
    return (
      <span>
        Projects <span className="mx-2"> &#8250; </span>
        {productId}
      </span>
    );
  };

  const relatedProducts = allProducts.filter(
    (item) => item.category === product.category
  );

  useEffect(() => {
    setLoading(true);
    getSingleProduct(productId)
      .then((res) => {
        setProduct(res);
        setDisplayImg(res.images[0]);
        setImages(res.images);
        console.log(product);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [productId]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        // const sameCategoriesProducts = res.filter(
        //   (item) => item.category === product.category
        // );
        // setRelatedProducts(sameCategoriesProducts);
        // console.log(relatedProducts);
        console.log(res);
        setAllProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Layout>
      <Header title="Portfolio" subTitle={<SubTitleText />} />
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Skeleton count={10} height={40} width={400} circle={false} />
        </div>
      ) : (
        <Container fluid className=" w-75 mx-auto">
          <div className="d-md-flex  flex-md-row  justify-content-center flex-sm-column align-items-center mx-auto gap ">
            <section className="w-md-60">
              <div className="my-4">
                <img src={displayImg} className="" />
              </div>
              <div className="d-flex flex-wrap justify-content-start align-items-center gap">
                {images &&
                  images.map((image) => {
                    return (
                      <img
                        className="w-25 border w-md-25"
                        key={image}
                        src={image}
                        onClick={() => {
                          handleDisplayImg && handleDisplayImg(image);
                        }}
                      />
                    );
                  })}
              </div>
            </section>
            <section className="border-bottom py-3 w-md-80">
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                onClick={handlePrevImg}
                className="my-3 fa-2x fontawesomeicon"
              />
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                onClick={handleNextImg}
                className="m-3 fa-2x fontawesomeicon"
              />
              <h2 className="border-bottom py-4">{product.description}</h2>
              <ul>
                <li>{product.brand}</li>
                <li>{product.category}</li>
                <li>{product.title}</li>
              </ul>
            </section>
          </div>
          <section className="my-5 mt-5 pt-5">
            <h3>Related Items</h3>
            <div className="d-md-flex flex-wrap">
              {relatedProducts &&
                relatedProducts.map((product) => {
                  return (
                    <ProductCard
                      key={product.id}
                      img={product.images[0]}
                      name={product.title}
                      description={product.description}
                      productLink={product.id}
                    />
                  );
                })}
            </div>
          </section>
        </Container>
      )}
    </Layout>
  );
};

export default ProductDetails;
