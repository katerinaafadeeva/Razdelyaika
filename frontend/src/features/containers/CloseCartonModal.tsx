import React from 'react';

function CloseCartonModal({
  changeCartonModal,
}: {
  changeCartonModal: () => void;
}): JSX.Element {
  return (
    <div
      x-show="modalOpen"
      x-transition
      className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5"
    >
      <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h3 className="text-dark pb-2 text-xl font-bold sm:text-2xl">
          Картон:
        </h3>

        <p
          className="text-body-color mb-10 text-base leading-relaxed"
          style={{ color: 'green', fontSize: '25px' }}
        >
          можно:
        </p>
        <ul className="info-modal-active-more">
          <li>коробки из под чая,лекарств, круп</li>
          <li>тонкие картонные упаковки</li>
        </ul>

        <p className="text-body-color mb-10 text-base leading-relaxed-notaloowed" style={{ color: 'red', fontSize: '25px' }}>
          нельзя:
        </p>
        <ul className="info-modal-active-more">
          <li>стаканчики</li>
          <li>тетрапак</li>
          <li>грохотки от яиц</li>
        </ul>
        <p className="text-body-color mb-10 text-base leading-relaxed-notaloowed"
        style={{ color: 'orange', fontSize: '25px' }}>
          важно:
        </p>
        <ul className="info-modal-active-more">
          <li>снять скотч,скрепки</li>
          <li>
            вторсырье не должно быть испачкано или содержать остатки пищи,клея
          </li>
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
              onClick={changeCartonModal}
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

export default CloseCartonModal;
