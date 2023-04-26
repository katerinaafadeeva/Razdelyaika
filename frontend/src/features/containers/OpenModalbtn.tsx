import React from 'react';

function OpenModalbtn({
  changeModal,
}: {
  changeModal: () => void;
}): JSX.Element {
  return (
    <div>
      <button className="modalBtn-fisrt" onClick={changeModal}>
        стекло
      </button>
    </div>
  );
}

export default OpenModalbtn;
