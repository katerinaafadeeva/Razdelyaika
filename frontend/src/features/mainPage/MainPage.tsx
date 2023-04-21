import React from 'react';
import './styles/main.css';
function MainPage(): JSX.Element {
  return (
    <div className="full-screen">
      <div className="full-screen__body">
        <p className="text__main_p">
          <span className="tc__y">Разделяй</span> мусор
        </p>
        <p> уже сегодня</p>
      </div>
    </div>
  );
}

export default MainPage;
