import React from 'react';

function OpenHardPlasticModal({
  changeModal,
}: {
  changeModal: () => void;
}): JSX.Element {
  return (
    <div>
      <button className="modalBtn-fisrt" onClick={changeModal}>
        твердый пластик
      </button>
    </div>
  );
}

export default OpenHardPlasticModal;
