import React, { useState } from 'react';
import './modalsStyle.css';
import SolutionModal from './SolutionModal';

function GeneralModal({
  showModalWindow,
}: {
  showModalWindow: () => void;
}): JSX.Element {
  const [solut, setSolut] = useState(false);

  const showSolutModal = (): void => {
    setSolut((prev) => !prev);
  };
  return (
    <div className="modal generalModal">
      <div className="modal-dialog" tabIndex={-1}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="headerCross">
              <h5 className="modal-title formHeader">
                General Modal Window for any shit
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={showModalWindow}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form action="/authentication/login" method="POST" id="formLog">
              <div className="mb-3">
                <label htmlFor="email" className="form-label" />
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  // required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" />

                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  // required
                />
              </div>
              <div className="testing">
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={showSolutModal}
                >
                  Сохранить изменения
                </button>
                {solut && <SolutionModal showSolutModal={showSolutModal} />}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={showModalWindow}
                >
                  Отмена
                </button>
              </div>
              <h5 className="errorLogin"></h5>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralModal;
