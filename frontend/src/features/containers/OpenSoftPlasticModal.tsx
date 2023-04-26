import React from 'react';

function OpenSoftPlasticModal({
  changeModal,
}: {
  changeModal: () => void;
}): JSX.Element {
  return (
    <div>
      <button className="modalBtn-fisrt" onClick={changeModal}>
        мягкий пластик
      </button>
    </div>
  );
}

export default OpenSoftPlasticModal;
