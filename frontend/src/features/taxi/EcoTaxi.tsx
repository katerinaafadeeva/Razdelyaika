import React, { useState } from 'react';
import image from './images/taxipng.png';
import './styles/taxi.css';
import { NavLink } from 'react-router-dom';

function EcoTaxi(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const showModalWindow = (): void => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div className="full-screen_taxi">
        <p className="text__main_p1">
          <span className="text__main_taxi">не можешь прийти на акцию?</span>
        </p>
        <div className="main-taxi-content-div">
          <div className="full-screen__body_taxi">
            <img src={image} alt="..." className="img-taxi"></img>
          </div>
          <div className="taxi-info">
            <p className="calltaxi">Вызови эко-такси</p>
            <p className="taxicall-info">
              Специально для тех, кто не смог посетить акцию, мы предоставляем
              услуги ЭкоТакси. Для сдачи действуют те же правила: всё вторсырье
              должно быть чистым и сухим, рассортировано по категориям и собрано
              в один большой пакет или коробку для удобства транспортировки. Нет
              времени на разбор мягкого и твердого пластика? Доплати 200 рублей
              и волонтеры сделают это за тебя!
            </p>

            <NavLink
              to="https://ecotaxi.wastezero.ru/"
              className="calltaxi-btn"
            >
              вызвать эко-такси
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default EcoTaxi;

// <>
//   <div>EcoTaxi</div>

//   <button type="button" onClick={showModalWindow}>
//     Это кнопка Show Modal Window
//   </button>
//   {showModal && <GeneralModal showModalWindow={showModalWindow} />}
// </>
