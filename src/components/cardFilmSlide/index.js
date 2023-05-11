import React, { useState, useCallback, useEffect } from "react";
import CardFilm from "../cardFilm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const CardFilmSlide = () => {
  const [movies, setMovie] = useState([]);
  const getListMovie = useCallback(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "56b5289f15mshc364816cf3d7e59p1e1244jsn82b86e539d8e",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    fetch("https://moviesdatabase.p.rapidapi.com/titles/x/upcoming", options)
      .then((response) => response.json())
      .then((response) => setMovie(response?.results))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getListMovie();
  }, [getListMovie]);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <FilmNextArrow />,
    prevArrow: <FilmPrevArrow />,
  };
  return (
    <div className="bigSlideContainer">
      <Slider {...settings}>
        {movies.map((item) => {
          return <CardFilm data={item} key={item.id} />;
        })}
      </Slider>
    </div>
  );
};

function FilmPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={className ? className + " btn-prev" : "btn-prev"}
      onClick={onClick}
    >
      <i class="fa-solid fa-arrow-left"></i>
    </button>
  );
}

function FilmNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      className={className ? className + " btn-next" : "btn-next"}
      onClick={onClick}
    >
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  );
}

export default CardFilmSlide;
