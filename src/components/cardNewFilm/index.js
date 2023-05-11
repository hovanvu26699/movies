import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_Film, IC_Play } from '../../assets';
import './index.css';
const CardNewFilm = (props) => {
  const { data } = props;
  return (
    <Link to={`/detail/${data?.id}`}>
      <div className="cardNewFilm">
        <div className="boxImg">
          <img
            src={data?.primaryImage?.url ? data?.primaryImage?.url : IMG_Film}
            alt="film"
          />
          <div className="play">
            <span className="icPlay">
              <img src={IC_Play} alt="play icon" />
            </span>
          </div>
        </div>
        <span className="new">NEW</span>
        <h3>{data?.titleText?.text}</h3>
      </div>
    </Link>
  );
};

export default CardNewFilm;
