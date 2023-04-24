import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../store';
import { addProdImg, addProduct } from './productsSlice';
import Uploader from '../uploader/Uploader';
import { useSelector } from 'react-redux';
import './style.css';

function FormAddProduct(): JSX.Element {
  const dispatch = useAppDispatch();
  const [newproductName, setProductName] = useState('');
  const [newproductPrice, setProductPrice] = useState('');
  const [newproductDescript, setproductDescript] = useState('');
  const { imgs } = useSelector((store: RootState) => store.productsState);

  // const handleAddProduct: React.FormEventHandler<HTMLFormElement> = async (
  //   event
  // ) => {
  //   event.preventDefault();
  //   const data = new FormData(event.target as HTMLFormElement);
  //   // console.log('data', data);
  //   dispatch(addProduct(data));
  // };

  const formChange: React.FormEventHandler<HTMLFormElement> = async (event) => {
    const data = new FormData(event.target as HTMLFormElement);
    console.log('data', data);
    dispatch(addProdImg(data));
  };

  const handleAddProduct: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    dispatch(addProduct(imgs));
  };

  // const handleAddProduct: React.FormEventHandler<HTMLFormElement> = async (
  //   event
  // ) => {
  //   event.preventDefault();

  //   const data = new FormData(event.target as HTMLFormElement);
  //   console.log('data', data);
  //   let params: RequestInit = {
  //     method: 'POST',
  //     body: data,
  //   };
  //   const res = await fetch('/api/shop', params);
  //   return res.json();
  // };

  return (
    <div>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <form
            className="mb-12"
            encType="multipart/form-data"
            onSubmit={handleAddProduct}
            onChange={formChange}
          >
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Наименование продукта
            </label>
            <input
              type="text"
              placeholder="Наименование"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={newproductName}
              required
              onChange={(e) => setProductName(e.target.value)}
              name="name"
            />
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Цена
            </label>
            <input
              type="number"
              placeholder="Цена"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD] raz"
              value={`${newproductPrice}`}
              required
              onChange={(e) => setProductPrice(e.target.value)}
              name="price"
            />
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Описание
            </label>
            <input
              type="text"
              placeholder="Описание"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={newproductDescript}
              onChange={(e) => setproductDescript(e.target.value)}
              name="description"
            />
            <Uploader />
            <button
              type="submit"
              className="bg-primary inline-flex items-center justify-center rounded-full py-4 px-5 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Добавить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormAddProduct;
