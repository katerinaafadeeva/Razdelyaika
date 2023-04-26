import React from 'react';

function OpenElectronicModal({
  changeModal,
}: {
  changeModal: () => void;
}): JSX.Element {
  return (
    <div>
      <button className="modalBtn-fisrt" onClick={changeModal}>
       электроника
      </button>
    </div>
  );
}

export default OpenElectronicModal;
