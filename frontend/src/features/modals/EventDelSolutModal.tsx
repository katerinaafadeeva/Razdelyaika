import React from 'react';
import './modalsStyle.css';

function EventDelSolutionModal({
  showSolutModal,
  onHandleClickDel,
}: {
  showSolutModal: () => void;
  onHandleClickDel: () => void;
}): JSX.Element {
  return (
    <div className="modal generalModal">
      <div className="modal-dialog" tabIndex={-1}>
        <div className="modal-content">
          <section className="bg-[#F4F7FF]">
            <form onSubmit={onHandleClickDel}>
              <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full">
                    <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg py-16 px-10 text-center sm:px-12 md:px-[60px] fon">
                      <div className="mb-10 text-center md:mb-16"></div>
                      <div>
                        <div className="mb-6">
                          <h1 className="mb-6 text-base text-[#adadad]">
                            Вы действительно хотите утилизировать это из своей
                            жизни?
                          </h1>
                        </div>
                        <div className="mb-10" style={{ display: 'flex' }}>
                          <button
                            type="submit"
                            value="Sign In"
                            className="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                            onClick={onHandleClickDel}
                          >
                            Отсортировать и удалить
                          </button>
                          <button
                            type="button"
                            value="Sign In"
                            className="bordder-primary w-full cursor-pointer rounded-md border bg-primary py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                            onClick={showSolutModal}
                          >
                            Кликнул случайно
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EventDelSolutionModal;
