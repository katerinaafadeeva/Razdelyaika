import React from 'react';

function OpenElectronicModal({
  changeElectronicsModal,
}: {
  changeElectronicsModal: () => void;
}): JSX.Element {
  return (
    <div className="container mx-auto py-20">
      <button
        onClick={changeElectronicsModal}
        className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white"
        style={{ backgroundColor: '#309959', minWidth: '150px' }}
      >
        электроника
      </button>
    </div>
    // <div>
    //   <button className="modalBtn-fisrt" onClick={changeElectronicsModal}>
    //    электроника
    //   </button>
    // </div>
  );
}

export default OpenElectronicModal;
