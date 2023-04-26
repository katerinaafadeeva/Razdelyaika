import React from 'react';

function OpenCartonModal({
  changeModal,
}: {
  changeModal: () => void;
}): JSX.Element {
  return (
    <div>
      <button className="modalBtn-fisrt" onClick={changeModal}>
        картон
      </button>
    </div>
  );
}

export default OpenCartonModal;
