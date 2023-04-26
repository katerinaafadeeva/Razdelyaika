import React from 'react';

function CloseElectronicModal({
  changeElectronicsModal,
}: {
  changeElectronicsModal: () => void;
}): JSX.Element {
  return (
    <div
      x-show="modalOpen"
      x-transition
      className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5"
    >
      <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h3 className="text-dark pb-2 text-xl font-bold sm:text-2xl">
          Электроника:
        </h3>

        <p
          className="text-body-color mb-10 text-base leading-relaxed"
          style={{ color: 'green', fontSize: '30px' }}
        >
          можно:
        </p>
        <ul className="info-modal-active-more">
          <li>принимаются составляющие :работающие и неработающее</li>
        </ul>
        <p
          className="text-body-color mb-10 text-base leading-relaxed-notaloowed"
          style={{ color: 'orange', fontSize: '25px' }}
        >
          важно:
        </p>
        <ul className="info-modal-active-more">
          <li>принимаются только светодиоидные лампы</li>
          <li>можно сдать цветные металлы</li>
        </ul>
        <div
          className="-mx-3 flex flex-wrap"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="w-1/2 px-3">
            <button
              onClick={changeElectronicsModal}
              className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseElectronicModal;
