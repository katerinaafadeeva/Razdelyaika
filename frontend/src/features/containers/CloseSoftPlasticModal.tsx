import React from 'react';

function CloseSoftPlasticModal({
  changeModal,
}: {
  changeModal: () => void;
}): JSX.Element {
  return (
    <div
      x-show="modalOpen"
      x-transition
      className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5"
    >
      <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h3 className="text-dark pb-2 text-xl font-bold sm:text-2xl">
          Мягкий пластик:
        </h3>

        <p className="text-body-color mb-10 text-base leading-relaxed">
          можно:
        </p>
        <ul className="info-modal-active-more">
          <li>фасовочные пакетики</li>
          <li>пакеты с ручками</li>
          <li>зип-пакеты</li>
          <li>пищевая пленка</li>
          <li>полиэтилен</li>
          <li>бахилы (без резинки)</li>
          <li>пакеты-майки</li>
          <li>плотные пакеты от круп,макарон,хлеба</li>
          <li>файлики</li>
          <li>обертки без фольгированного слоя</li>
          <li>сетки от фруктов и овощей</li>
          <li>
            прочие ПЭ-пакеты (фольгированные, блестящие с маркировкой 2 или 4)
          </li>
          <li>ПП-пакеты (фольгированные,блестящие ,с маркировкой 5PP)</li>
        </ul>

        <p className="text-body-color mb-10 text-base leading-relaxed-notaloowed">
          важно:
        </p>
        <ul className="info-modal-active-more">
          <li>вырезать, убрать бумажные этикетки</li>
        </ul>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-1/2 px-3">
            <button
              onClick={changeModal}
              className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseSoftPlasticModal;
