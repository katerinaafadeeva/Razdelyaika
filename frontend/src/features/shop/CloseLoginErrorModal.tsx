import React from 'react';

function CloseLoginErrorModal({
  changeLogModal,
}: {
  changeLogModal: () => void;
}): JSX.Element {
  return (
    <div
      x-show="modalOpen"
      x-transition
      className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5"
    >
      <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
        <p
          className="text-body-color mb-10 text-base leading-relaxed"
          style={{ color: 'green', fontSize: '25px' }}
        >
          для покупки <a href="/signin">войдите</a> или{' '}
          <a href="/signup">зарегистрируйтесь</a>
        </p>

        <div
          className="-mx-3 flex flex-wrap"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="w-1/2 px-3">
            <button className="btn-cart" onClick={changeLogModal}>
              закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CloseLoginErrorModal;
