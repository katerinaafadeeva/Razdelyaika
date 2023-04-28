import React from 'react';
import './styles/main.css';
import ImgGroup from './ImgGroup';
import MapCard from './map/MapCard';
import { Link } from 'react-router-dom';
function MainPage(): JSX.Element {
  return (
    <>
      <div className="full-screen">
        <div className="full-screen__body">
          <div className="separatediv">
            <p className="text__main_p">
              <span className="text__main">Разделяй</span> мусор
            </p>
            <p className="text__main_p"> уже сегодня</p>
            <Link to="/containers">
              <button className="cst__btn">Правила сортировки</button>
            </Link>
          </div>
          <div className="wrapper__image__group">
            <ImgGroup />
          </div>
        </div>
      </div>
      <MapCard />
    </>
  );
}

export default MainPage;
