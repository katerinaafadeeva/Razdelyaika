import React, { useState } from 'react';
import GeneralModal from '../modals/GeneralModal';
import image from './images/taxipng.png';

function EcoTaxi(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const showModalWindow = (): void => {
    setShowModal((prev) => !prev);
  };

  return (
    // <>
    //   <div>EcoTaxi</div>

    //   <button type="button" onClick={showModalWindow}>
    //     Это кнопка Show Modal Window
    //   </button>
    //   {showModal && <GeneralModal showModalWindow={showModalWindow} />}
    // </>
    <>
      <div className="full-screen_taxi">
        <div className="full-screen__body_taxi">
          <p className="text__main_p">
            <span className="text__main_taxi">не можешь прийти на акцию?</span>
          </p>
          <a href="https://xn--b1aduhfbab7a4a8e.xn--p1ai/call-eco-taxi">
            <button className="cst__btn">вызвать эко-такси</button>
          </a>
          <img src={image} alt="..."></img>
        </div>
      </div>
    </>
  );
}

export default EcoTaxi;
