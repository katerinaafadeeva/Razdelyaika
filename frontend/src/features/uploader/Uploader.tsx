import React from 'react';
import { useSelector } from 'react-redux';
import { addProdImg, delProdImg } from '../shop/productsSlice';
import { RootState, useAppDispatch } from '../../store';
import { Imgs } from '../shop/types/Img';

function App(): JSX.Element {
  const { imgs } = useSelector((store: RootState) => store.productsState);
  const dispatch = useAppDispatch();

  const addImgsToState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(addProdImg(e.target.files));
  };

  function delAddedImg(): void {
    dispatch(delProdImg);
  }

  return (
    // <form
    //   method="post"
    //   action="http://localhost:4000/api/photo"
    //   onSubmit={getImgPath}
    //   encType="multipart/form-data"
    // >
    //   <input type="file" name="file" multiple />
    //   <button type="submit">Добавить файлы</button>
    // </form>
    <>
      {Object.keys(imgs).length > 0 &&
        Object.values(imgs).map((file: any) => (
          <div key={file.lastModifiedDate}>
            <h1>{file.name}</h1>
            <button
              type="button"
              // className="close"
              // aria-label="Close"
              // style={{ color: 'black' }}
              onClick={delAddedImg}>
              Удалить
            </button>{' '}
          </div>
        ))}
      <input type="file" name="file" multiple onChange={addImgsToState} />

      {/* <button type="button" onClick={getImgPath}>
        Добавить файлы
      </button> */}
    </>
  );
}

export default App;
