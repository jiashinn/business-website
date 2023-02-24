import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        {/* <img
          className="vh-100 w-100"
          src="https://fakeimg.pl/1500x890/?retina=1&text=こんにちは&font=noto"
          alt="First Slide"
        /> */}
        <img
          className="vh-100 w-100 object-fit-cover"
          src={carousel1}
          alt="First Slide"
        />

        <Carousel.Caption className="">
          <div>
            <h3>卓越品質</h3>
            <h5>讓經營成為享受</h5>
          </div>
          <p>期待與您的合作</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="vh-100 w-100 object-fit-cover"
          src={carousel2}
          alt="Second Slide"
        />

        <Carousel.Caption>
          <div>
            <h3>卓越品質</h3>
            <h5>讓經營成為享受</h5>
          </div>
          <p>酷碼 期待與您的合作</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
