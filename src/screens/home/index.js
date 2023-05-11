import React, { useCallback, useEffect, useState } from "react";
import {
  IC_Play,
  IC_Coffee,
  IMG_PopCorn,
  IMG_Cinema,
  IMG_Action,
  IMG_Roamntic,
  IMG_Iron,
  IMG_Commedy,
  IMG_Award,
  IMG_Princess,
  IMG_News,
  IMG_Event,
} from "../../assets";
import CardFilmSlide from "../../components/cardFilmSlide";
import CardNewFilm from "../../components/cardNewFilm";
import CardCategory from "../../components/cardCategory";
import CateSlide from "../../components/cateSlide";
import ListPrice from "../../components/listPrice";

import "./index.css";
import Button from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { getListFeaturedMovieHandle } from "../../redux/actions";
import { getLoadingSelector, listMovieFeature } from "../../redux/selectors";
import { GET_LIST_MOVIE_FEATURED } from "../../redux/actionType";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const listFeatureMovie = useSelector(listMovieFeature);

  const loading = useSelector((state) =>
    getLoadingSelector(state, [GET_LIST_MOVIE_FEATURED.HANDLER])
  );
  console.log(loading);
  const getListMovie = useCallback(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "56b5289f15mshc364816cf3d7e59p1e1244jsn82b86e539d8e",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };
    fetch("https://moviesdatabase.p.rapidapi.com/titles?limit=3", options)
      .then((response) => response.json())
      .then((response) =>
        dispatch(getListFeaturedMovieHandle(response?.results))
      )
      .catch((err) => console.error(err));
  }, [dispatch]);

  useEffect(() => {
    getListMovie();
  }, [getListMovie]);

  return (
    <div className="homeContainer">
      <section className="bigBanner">
        <div className="background"></div>
        <div className="wrapper">
          <div className="wrapperContent">
            <div className="bigBannerTrailer">
              <span>WATCH</span>
              <span>
                <img src={IC_Play} alt="icon play" />
              </span>
              <span>TRAILER</span>
            </div>
            <div className="infoFilm">
              <p>Vivamus sit amet interdum elit</p>
              <h3 className="nameFilm">Mancing Mania The Movie</h3>
              <p>On the air 01 . 11 . 20</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bigSlide">
        <CardFilmSlide />
      </section>
      <section className="featuredFilm">
        <div className="featuredTitle">
          <h2 className="title">
            Featured <span>Movies</span>
          </h2>
          <p>
            Aut facere saepe quo minus neque et harum perspiciatis sed omnis.
          </p>
        </div>
        {listFeatureMovie?.length > 0 &&
          listFeatureMovie.map((item) => {
            return <CardNewFilm data={item} key={item.id} />;
          })}
      </section>
      <section className="freeSection">
        <div className="freeRent">
          <div className="boxImgFree">
            <img src={IMG_PopCorn} alt="popcorn" />
          </div>
          <div className="freeRentTitle">
            <h3>
              FREE <br /> RENT 3 DAYS
            </h3>
          </div>
        </div>
        <div className="freeRent">
          <div className="boxImgFree">
            <img src={IMG_Cinema} alt="popcorn" />
          </div>
          <div className="freeRentTitle">
            <div>
              <img src={IC_Coffee} alt="icon Coff" />
              <span>FREE </span>
            </div>
            <h3>MOVIES</h3>
          </div>
        </div>
        <div className="freeRent">
          <div className="boxImgFree">
            <img src={IMG_PopCorn} alt="popcorn" />
          </div>
          <div className="freeRentTitle">
            <h3>
              FREE <br /> UP TO 5 EPISODES
            </h3>
          </div>
        </div>
      </section>
      <section className="categories">
        <div className="categoriesWrapper cateRow">
          <div className="categoriesTitle ">
            <h2>Top</h2>
            <span>Categories</span>
          </div>
          <div className="cateRow">
            <CardCategory
              att="small"
              image={IMG_Award}
              name="Academy Awards"
              bgColor="orange"
            />
            <CardCategory
              att="small"
              image={IMG_Princess}
              name="Animations"
              bgColor="#ff002d"
            />
          </div>

          <div className="cateMainLeft">
            <CardCategory
              button="true"
              image={IMG_Action}
              name="Actions"
              bgColor="#000090db"
            />
            <div className="cateRow">
              <CardCategory
                att="small"
                image={IMG_Roamntic}
                name="Romance Drama"
                bgColor="#009cff"
              />
              <CardCategory
                att="small"
                image={IMG_Commedy}
                name="Commedy"
                bgColor="green"
              />
            </div>
          </div>
          <div className="cateMainRight">
            <CardCategory button="true" image={IMG_Iron} name="Super Heroes" />
          </div>
        </div>
      </section>
      <section className="cateSlide">
        <div className="cateSlideTitle">
          <h2>
            All <span>Categories</span>
          </h2>
        </div>
        <CateSlide />
      </section>
      <section className="prices">
        <div className="pricesTitle">
          <h2>
            Flexible <span>Pricing and Plan</span>
          </h2>
        </div>
        <ListPrice />
      </section>
      <section clasName="article">
        <div className="articleWrapper">
          <div className="event articleItem">
            <div className="articleBOxImg">
              <img src={IMG_Event} alt="news" />
            </div>
            <div className="articleContent">
              <h3>EVENT</h3>
              <p>
                Sed imperdiet enim ligula, vitea viverra justo mi sed. Duis eget
                felis bibendum, pritium mi sed, placerat ante{" "}
              </p>
              <Button name="READ MORE" att="btn btn-no-bg" />
            </div>
          </div>
          <div className="event articleItem">
            <div className="articleBOxImg">
              <img src={IMG_News} alt="news" />
            </div>
            <div className="articleContent">
              <h3>NEWS</h3>
              <p>
                Sed imperdiet enim ligula, vitea viverra justo mi sed. Duis eget
                felis bibendum, pritium mi sed, placerat ante{" "}
              </p>
              <Button name="READ MORE" att="btn btn-no-bg" />
            </div>
          </div>
        </div>
      </section>
      <section className="wait">
        <h2>What are you waiting for?</h2>
        <Button name="GET STARTED" att="btn btn-blue" />
      </section>
    </div>
  );
};

export default HomeScreen;
