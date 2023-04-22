import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addProduct } from './productsSlice';

function FormAddProduct(): JSX.Element {
  const dispatch = useAppDispatch();
  const [newproductName, setProductName] = useState('');
  const [newproductPrice, setProductPrice] = useState(0);
  const [newproductDescript, setproductDescript] = useState('');

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addProduct({
        productName: newproductName,
        productPrice: newproductPrice,
        productDescript: newproductDescript,
      })
    );
  };
  return (
    <form onSubmit={handleAddProduct}>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mb-12">
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              наименование продукта
            </label>
            <input
              type="text"
              placeholder="Наименование"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={newproductName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <label
              htmlFor=""
              className="mb-3 block text-base font-medium text-black"
            >
              Цена
            </label>
            <input
              type="text"
              placeholder="цена"
              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
              value={newproductPrice}
              onChange={(e) => setProductPrice(Number(e.target.value))}
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
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="bg-primary inline-flex items-center justify-center rounded-full py-4 px-5 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        Добавить
      </button>
    </form>
  );
}

export default FormAddProduct;
