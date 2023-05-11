import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetailMovie } from "../../redux/actions";
import { detailMovieSelector } from "../../redux/selectors";

import Button from "../../components/button";
import CardFilm from "../../components/cardFilm";

import "./index.css";

const DetailMovie = () => {
  const dispatch = useDispatch();
  const detailMovie = useSelector(detailMovieSelector);
  const { id } = useParams();
  const getMovie = useCallback(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "56b5289f15mshc364816cf3d7e59p1e1244jsn82b86e539d8e",
        "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      },
    };

    fetch(`https://moviesdatabase.p.rapidapi.com/titles/${id}`, options)
      .then((response) => response.json())
      .then((response) => dispatch(getDetailMovie(response?.results)))
      .catch((err) => {
        throw err;
      });
  }, [id, dispatch]);

  useEffect(() => {
    getMovie();
  }, [getMovie, id]);

  return (
    <div className="detailContainer">
      <div className="film">
        <CardFilm data={detailMovie} key={detailMovie.id} />
      </div>
      <div className="filmDecs">
        <div className="filmDecsWrapper">
          <div className="storyLine">
            <h3>Storyline</h3>
            <p>
              Vestibulum faucibus eget erat eget pretium. Donec commodo
              convallis eget suscipit orci. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <div className="filmBtn">
              <Button
                name="SHARE"
                icon={<i class="fa-solid fa-share-nodes"></i>}
                att="btn btn-no-bg"
              />
              <Button
                name="TRIVIA"
                icon={<i class="fa-solid fa-clapperboard"></i>}
                att="btn btn-no-bg"
              />
              <Button
                name="RATE THIS"
                icon={<i class="fa-solid fa-star"></i>}
                att="btn btn-no-bg"
              />
            </div>
          </div>
          <div className="join">
            <div className="director">
              <h4>DIRECTOR:</h4>
              <p>John Doe</p>
            </div>
            <div className="writers">
              <h4>Writers:</h4>
              <p>John Doe, Jim Doe, Jane Doe</p>
            </div>
            <div className="stars">
              <h4>Stars:</h4>
              <p>
                {detailMovie?.primaryImage?.caption?.plainText &&
                  "John Doe, Jim Doe, Jane Doe"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
