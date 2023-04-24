import React from 'react';
import { useSelector } from 'react-redux';
import { addProdImg, delProdImg } from '../shop/productsSlice';
import { RootState, useAppDispatch } from '../../store';
import { Imgs } from '../shop/types/Img';

function Uploader(): JSX.Element {
  const { imgs } = useSelector((store: RootState) => store.productsState);
  const dispatch = useAppDispatch();

  const addImgsToState = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log('aaa', e.target.files);
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
              // className="close"
              // aria-label="Close"
              // style={{ color: 'black' }}
              onClick={delAddedImg}
            >
              Удалить
            </button>
          </div>
        ))}
      {/* <form encType="multipart/form-data" onSubmit={sub}> */}
      <input
        type="file"
        name="file"
        multiple
        accept="image/png, image/jpeg, image/jpg"
        onChange={addImgsToState}
        style={{ color: 'transparent' }}
      />
      {/* <input type="submit" value="Добавить выбранные файлы" />
      </form> */}
    </>
  );
}

export default Uploader;

// const fileUpload = require("express-fileupload");
// const path = require('path');
// const util = require('util')

// const storage = async (file)=>{
//   const fileName = file.name
//   const size = file.data.length
//   const extension = path.extname(fileName)
//   const allowedExtensions = /png|jpeg|jpg|gif|webp/
//   if(!allowedExtensions.test(extension)) throw "Unsupported extension !"
//   if(size > 5000000) throw "File must be less than 5MB"
//   const md5 = file.md5
//   const URL = '/photo/' + md5 + extension
//   await util.promisify(file.mv)("./images" + URL)
//   return URL
// }

// router.post("/photo", async (req, res) => {
//   try {
//   const file = req.files.homesImg;
//   const arrUrl = await Promise.all(
//     file.map(async (el) => await storage(el))
//   );
//   res.json(arrUrl);
//   } catch {console.error}
// });

// const sizeValue = (e) => {
//     setState((prev) => [...prev, e.target.value]);
//   };
//   const sendFiles = async (e) => {
//     const picturesData = [...e.target.files];
//     try {
//       const data = new FormData();
//       picturesData.forEach((img) => {
//         data.append("homesImg", img);
//       });
//       dispatch(addPhotoFetch(data));
//     } catch (error) {}
//   };
