import React, { useState } from 'react';
import { useAppDispatch } from '../../store';

import { useParams } from 'react-router-dom';
import { updateProduct } from './productsSlice';

const FormUpdateProduct = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { productId } = useParams();
  const [updproductName, setUpdProductName] = useState('');
  const [updproductPrice, setUpdProductPrice] = useState(0);
  const [updproductDescript, setUpdproductDescript] = useState('');

  // const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(
  //     updateProduct({
  //       id: Number(productId),
  //       productName: updproductName,
  //       productPrice: updproductPrice,
  //       productDescript: updproductDescript,
  //     })
  //   );
  // };
  return (
    // <form onSubmit={handleUpdateProduct}>
    //   <div className="-mx-4 flex flex-wrap">
    //     <div className="w-full px-4 md:w-1/2 lg:w-1/3">
    //       <div className="mb-12">
    //         <label
    //           htmlFor=""
    //           className="mb-3 block text-base font-medium text-black"
    //         >
    //           наименование продукта
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="Наименование"
    //           className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
    //           value={updproductName}
    //           onChange={(e) => setUpdProductName(e.target.value)}
    //         />
    //         <label
    //           htmlFor=""
    //           className="mb-3 block text-base font-medium text-black"
    //         >
    //           Цена
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="цена"
    //           className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
    //           value={updproductPrice}
    //           onChange={(e) => setUpdProductPrice(Number(e.target.value))}
    //         />
    //         <label
    //           htmlFor=""
    //           className="mb-3 block text-base font-medium text-black"
    //         >
    //           Описание
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="Описание"
    //           className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
    //           value={updproductDescript}
    //           onChange={(e) => setUpdproductDescript(e.target.value)}
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     type="submit"
    //     className="bg-primary inline-flex items-center justify-center rounded-full py-4 px-5 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
    //   >
    //     Update
    //   </button>
    // </form>
    <h1>sjdfls</h1>
  );
};

export default FormUpdateProduct;
