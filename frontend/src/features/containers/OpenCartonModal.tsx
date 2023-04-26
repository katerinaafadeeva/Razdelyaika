import React from 'react';

function OpenCartonModal({
  changeCartonModal,
}: {
  changeCartonModal: () => void;
}): JSX.Element {
  return (
    <div className="container mx-auto py-20">
      <button
        onClick={changeCartonModal}
        className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white"
        style={{ backgroundColor: '#309959', minWidth: '150px' }}
      >
        картон
      </button>
    </div>
    // <div>
    //   <button className="modalBtn-fisrt" onClick={changeCartonModal}>
    //     картон
    //   </button>
    // </div>
  );
}

export default OpenCartonModal;
