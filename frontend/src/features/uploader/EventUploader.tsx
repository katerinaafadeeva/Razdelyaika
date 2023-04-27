import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { addEventImg, delEventImg } from '../events/eventSlice';
import { RootState, useAppDispatch } from '../../store';
import { Imgs } from '../shop/types/Img';

function EventUploader(): JSX.Element {
  const { imgs } = useSelector((store: RootState) => store.eventState);
  const dispatch = useAppDispatch();

  const addImgsToState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(addEventImg(e.target.files));
  };

  function delAddedImg(e: React.MouseEvent<HTMLButtonElement>): void {
    // console.log('lastModified deleted file', e.currentTarget.name);
    dispatch(delEventImg(Number(e.currentTarget.name)));
  }

  return (
    <>
      {Object.keys(imgs).length > 0 &&
        Object.values(imgs).map((file: any) => (
          <div key={uuidv4()}>
            <h1>{file.name}</h1>
            <button
              type="button"
              name={file.lastModified}
              onClick={delAddedImg}
              style={{
                fontSize: '1.8rem',
              }}
            >
              &times;
            </button>
          </div>
        ))}
      <input
        type="file"
        name="file"
        // multiple
        accept="image/png, image/jpeg, image/jpg"
        onChange={addImgsToState}
        style={{ color: 'transparent' }}
      />
    </>
  );
}

export default EventUploader;
