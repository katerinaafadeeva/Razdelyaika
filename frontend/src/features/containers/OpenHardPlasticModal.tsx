import React from 'react';

function OpenHardPlasticModal({
  changeHardPlasticModal,
}: {
  changeHardPlasticModal: () => void;
}): JSX.Element {
  return (
    
      <div className="container mx-auto py-20">
        <button
          onClick={changeHardPlasticModal}
          className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white"
          style={{ backgroundColor: '#309959', minWidth: '150px' }}
        >
          твердый пластик
        </button>
      </div>

    // <div>
    //   <button className="modalBtn-fisrt" onClick={changeHardPlasticModal}>
    //     твердый пластик
    //   </button>
    // </div>
  );
}

export default OpenHardPlasticModal;
