import React, { useState } from 'react';
import GeneralModal from '../modals/GeneralModal';

function EcoTaxi(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  const showModalWindow = (): void => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <div>EcoTaxi</div>

      <button type="button" onClick={showModalWindow}>
        Это кнопка Show Modal Window
      </button>
      {showModal && <GeneralModal showModalWindow={showModalWindow} />}
    </>
  );
}

export default EcoTaxi;
