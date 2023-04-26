import React from 'react';

function CloseHardPlasticModal({
  changeHardPlasticModal,
}: {
  changeHardPlasticModal: () => void;
}): JSX.Element {
  return (
    <div
      x-show="modalOpen"
      x-transition
      className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5"
    >
      <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <h3 className="text-dark pb-2 text-xl font-bold sm:text-2xl">
          Твердый пластик:
        </h3>

        <p
          className="text-body-color mb-10 text-base leading-relaxed"
          style={{ color: 'green', fontSize: '25px' }}
        >
          можно:
        </p>
        <div className="scroll-plastic-modal">
          <ul className="info-modal-active-more">
            <li>PET-1 (питьевые бутылки)</li>
            <li>PET-1 (непитьевые бутылки-химия,масло)</li>
            <li>
              PET-1 (небутылочный-контейнеры,упаковки и подложки от конфет)
            </li>
            <li>HDPE-2 (емкости от моющих средств, косметики,канистры)</li>
            <li>
              LDPE-4 (некоторые косметические или медицинские
              средства,химия,крышки от стеклянных банок и бутылей 19л,тюбики)
            </li>
            <li>
              PET-5 (упаковки и крышечки с маркировкой 5,одноразовые
              трубочки,ватные палочки)
            </li>
            <li>
              PS-6 невспененный (упаковки с маркировкой 6,коробки
              дисков(ломкие))
            </li>
            <li>
              PS-6 вспененный (упаковки с маркировкой 6,пенопласт,вспененные
              подложки)
            </li>
            <li>пластиковые зубные щетки</li>
          </ul>

          <p
            className="text-body-color mb-10 text-base leading-relaxed-notaloowed"
            style={{ color: 'red', fontSize: '25px' }}
          >
            нельзя:
          </p>
          <ul className="info-modal-active-more">
            <li>вспененные подложки с перформацией на дне</li>
          </ul>
          <p
            className="text-body-color mb-10 text-base leading-relaxed-notaloowed"
            style={{ color: 'orange', fontSize: '25px' }}
          >
            важно:
          </p>
          <ul className="info-modal-active-more">
            <li>тщательно вымыть и утрамбовать</li>
            <li>снять обертку</li>
            <li>крышечки от пластиковых бутылок можно сдать отдельно</li>
          </ul>
        </div>
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
              onClick={changeHardPlasticModal}
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

export default CloseHardPlasticModal;
