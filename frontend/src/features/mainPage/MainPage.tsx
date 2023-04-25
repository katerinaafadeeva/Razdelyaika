import React from 'react';
import './styles/main.css';
import ImgGroup from './ImgGroup';
import MapCard from './map/MapCard';
function MainPage(): JSX.Element {
  return (
    <>
      <div className="full-screen">
        <div className="full-screen__body">
          <p className="text__main_p">
            <span className="text__main">Разделяй</span> мусор
          </p>
          <p className="text__main_p"> уже сегодня</p>
          <a href="/containers">
            <button className="cst__btn">Правила сортировки</button>
          </a>
          <ImgGroup />
        </div>
      </div>
      <MapCard />
    </>
  );
}

export default MainPage;
