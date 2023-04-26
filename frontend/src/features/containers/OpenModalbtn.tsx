import React from 'react';

function OpenModalbtn({
  changeGlassModal,
}: {
  changeGlassModal: () => void;
}): JSX.Element {
  return (
    <div className="container mx-auto py-20">
      <button
        onClick={changeGlassModal}
        className="bg-primary rounded-full py-3 px-6 text-base font-medium text-white"
        style={{ backgroundColor: '#309959', minWidth: '150px' }}
      >
        стекло
      </button>
    </div>
    // <div>
    //   <button className="modalBtn-fisrt" onClick={changeGlassModal}>
    //     стекло
    //   </button>
    // </div>
  );
}

export default OpenModalbtn;
