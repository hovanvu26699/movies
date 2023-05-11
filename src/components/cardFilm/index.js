import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_Film } from '../../assets';
import Rating from '@mui/material/Rating';
import Button from '../button/index';

import './index.css';

const CardFilm = (props) => {
  const { data } = props;

  return (
    <div className="cardFilmContainer">
      <div className="lay"></div>
      <div className="infoFilm">
        <p>{data?.titleType?.text}</p>
        <h2>{data?.titleText?.text}</h2>
        <div className="rateTime">
          <Rating
            name="half-rating-read"
            defaultValue={5}
            precision={0.5}
            readOnly
          />
          <span className="ratePoints">5.0</span>
          <span className="timeFilm">2h 13m</span>
        </div>
        <div className="reviewFilm">
          <p>
            Cum maxime excepturi ut quod sint aut esse sequi qui molestias
            pariatur id tempora omnis non exercitationem enim qui architecto
            molestias
          </p>
        </div>
        <div className="buttonFilm">
          <Button name="WATCH TRAILER" att="btn no-bg" />
          <Button name="WATCH FULL MOVIE" att="btn btn-pink " />
        </div>
      </div>
      <div className="boxImg">
        <Link to={`/detail/${data?.id}`}>
          <img
            src={data?.primaryImage?.url ? data?.primaryImage?.url : IMG_Film}
            alt="avatar film"
          />
        </Link>
      </div>
    </div>
  );
};

export default CardFilm;
