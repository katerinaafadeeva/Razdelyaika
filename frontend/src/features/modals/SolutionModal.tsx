import React from 'react';
import './modalsStyle.css';

function SolutionModal({
  showSolutModal,
}: {
  showSolutModal: () => void;
}): JSX.Element {
  return (
    <div className="modal generalModal">
      <div className="modal-dialog" tabIndex={-1}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title formHeader">
              Вы действительно хотите удалить/изменить запись?
            </h5>
          </div>
          {/* <div className="modal-footer"> */}
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Удалить/изменить
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={showSolutModal}
          >
            Отмена
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default SolutionModal;
