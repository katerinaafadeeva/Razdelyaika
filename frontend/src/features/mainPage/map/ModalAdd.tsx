import React, { useState } from 'react';
import AddEcoPoint from './AddEcoPoint';
import './styles/Map.css';

function ModalAdd(): JSX.Element {
  const [status, setStatus] = useState(false);

  const onClickModalOpen = (): void => {
    setStatus(true);
  };

  const onClickModalClose = (): void => {
    setStatus((prev) => !prev);
  };

  return (
    <>
      {!status && (
        <div className="container mx-auto ">
          <button
            onClick={onClickModalOpen}
            className="btn_modalic bg-primary rounded-full py-3 px-6 text-base font-medium text-white">
            Добавить точку
          </button>
        </div>
      )}
      {status && (
        <div
          x-show="modalOpen"
          x-transition
          className="fixed top-0 left-0 flex h-full min-h-screen w-full items-center justify-center bg-black bg-opacity-90 px-4 py-5">
          <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
            <h3 className="text-dark pb-2 text-xl font-bold sm:text-2xl">Добавить эко-точку</h3>
            <div className="text-body-color mb-10 text-base leading-relaxed">
              <AddEcoPoint />
            </div>
            <div
              className="-mx-3 flex flex-wrap"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <div className="w-1/3 px-3">
                <button
                  onClick={onClickModalClose}
                  className="text-dark block w-full rounded-lg border border-[#E9EDF9] p-3 text-center text-base font-medium transition hover:border-red-600 hover:bg-red-600 hover:text-white">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalAdd;
