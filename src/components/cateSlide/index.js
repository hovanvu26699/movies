import React from "react";
import { IMG_PopCorn } from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const CateSlide = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    speech: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: <CateNextArrow />,
    prevArrow: <CatePrevArrow />,
  };
  return (
    <div className="cateSlideContainer">
      <div className="cateSlideWrapper">
        <Slider {...settings}>
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
          <CateItem />
        </Slider>
      </div>
    </div>
  );
};

const CateItem = () => {
  return (
    <div className="cateItem">
      <div className="cateItemBoxImg">
        <img src={IMG_PopCorn} alt="categories" />
      </div>
      <h3>ROMANTIC</h3>
    </div>
  );
};

function CatePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={className ? className + " cateBtn-prev" : "cateBtn-prev"}
      onClick={onClick}
    >
      <i class="fa-solid fa-arrow-left"></i>
    </button>
  );
}

function CateNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={className ? className + " cateBtn-next" : "cateBtn-next"}
      onClick={onClick}
    >
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  );
}
export default CateSlide;
