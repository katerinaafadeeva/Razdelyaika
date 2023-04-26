import React from 'react';

function OpenPaperModal({
  changeModal,
}: {
  changeModal: () => void;
}): JSX.Element {
  return (
    <div>
      <button className="modalBtn-fisrt" onClick={changeModal}>
        бумага
      </button>
    </div>
  );
}

export default OpenPaperModal;
