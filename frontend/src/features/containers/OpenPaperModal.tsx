import React from 'react';

function OpenPaperModal({
  changePaperModal,
}: {
  changePaperModal: () => void;
}): JSX.Element {
  return (
    <div className="container mx-auto py-20">
      <button
        onClick={changePaperModal}
        className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white"
        style={{ backgroundColor: '#309959', minWidth: '150px' }}
      >
        стекло
      </button>
    </div>
    // <div>
    //   <button className="modalBtn-fisrt" onClick={changePaperModal}>
    //     бумага
    //   </button>
    // </div>
  );
}

export default OpenPaperModal;
