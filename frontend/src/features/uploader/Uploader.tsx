import React from 'react';
import { useSelector } from 'react-redux';
import { addProdImg, delProdImg } from '../shop/productsSlice';
import { RootState, useAppDispatch } from '../../store';
import { Imgs } from '../shop/types/Img';

function Uploader(): JSX.Element {
  const { imgs } = useSelector((store: RootState) => store.productsState);
  const dispatch = useAppDispatch();

  const addImgsToState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(addProdImg(e.target.files));
  };

  function delAddedImg(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log(new Date(e.currentTarget.name).getTime());
    dispatch(delProdImg(new Date(e.currentTarget.name).getTime()));
  }

  return (
    <>
      {Object.keys(imgs).length > 0 &&
        Object.values(imgs).map((file: any) => (
          <div key={file.lastModifiedDate}>
            <h1>{file.name}</h1>
            <button
              type="button"
              name={file.lastModifiedDate}
              onClick={delAddedImg}>
              Удалить
            </button>
          </div>
        ))}
      <input
        type="file"
        name="file"
        multiple
        accept="image/png, image/jpeg, image/jpg"
        onChange={addImgsToState}
        style={{ color: 'transparent' }}
      />

    </>
  );
}

export default Uploader;
