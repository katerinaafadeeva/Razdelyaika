import React, { useState } from 'react';
import { RootState, useAppDispatch } from '../../store';

import { useParams } from 'react-router-dom';
import { updateProduct } from './productsSlice';
import { Product } from './types/Products';
import { useSelector } from 'react-redux';
import ProductUploader from '../uploader/ProductUploader';

const ModalUpdateProduct = ({
  showModalUpdate,
  product,
}: {
  showModalUpdate: () => void;
  product: Product;
}): JSX.Element => {
  const dispatch = useAppDispatch();
  const { prodImgs } = useSelector((store: RootState) => store.productsState);

  console.log('prodImgs', prodImgs);
  const productId = product.id;
  // console.log('product', product);
  const [updproductName, setUpdProductName] = useState(product.productName);
  const [updproductPrice, setUpdProductPrice] = useState(
    String(Number(product.productPrice))
  );
  const [updproductDescript, setUpdproductDescript] = useState(
    product.productDescript
  );
  const { sizes } = useSelector((store: RootState) => store.productsState);

  // const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   dispatch(
  //     updateProduct({
  //       id: Number(productId),
  //       productName: updproductName,
  //       productPrice: Number(updproductPrice),
  //       productDescript: updproductDescript,
  //     })
  //   );
  // };

  const handleUpdateProduct: React.FormEventHandler<HTMLFormElement> = (
    e
  ): void => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    console.log('data', data);
    console.log('productId', productId);
    dispatch(updateProduct({ data: data, productId: Number(productId) }));
  };

  return (
    <div className="modal generalModal">
      <div className="modal-dialog" tabIndex={-1}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="headerCross">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={showModalUpdate}
                style={{
                  fontSize: '1.8rem',
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="w-full px-4 ">
                <div className="overflow-hidden rounded-lg bg-white">
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                      <form
                        className="mb-12"
                        encType="multipart/form-data"
                        onSubmit={handleUpdateProduct}
                        // onChange={formChange}
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
                          value={updproductName}
                          required
                          onChange={(e) => setUpdProductName(e.target.value)}
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
                          value={`${updproductPrice}`}
                          required
                          onChange={(e) => setUpdProductPrice(e.target.value)}
                          name="price"
                        />
                        <label
                          htmlFor=""
                          className="mb-3 block text-base font-medium text-black"
                        >
                          Описание
                        </label>
                        <textarea
                          placeholder="Описание"
                          className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD]"
                          value={updproductDescript}
                          onChange={(e) =>
                            setUpdproductDescript(e.target.value)
                          }
                          name="description"
                        />
                        <label
                          htmlFor=""
                          className="mb-3 block text-base font-medium text-black"
                        >
                          Доступные размеры
                        </label>
                        {sizes.map((size) => (
                          <>
                            <label>{size}</label>
                            <input
                              type="checkbox"
                              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD] raz"
                              defaultValue={size}
                              name="sizes"
                            />
                          </>
                        ))}
                        <input
                          style={{ display: 'none' }}
                          required
                          type="text"
                          className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD] raz"
                          value={prodImgs?.map((prodImg) => prodImg).join()}
                          name="imgs"
                        />
                        <ProductUploader />
                        <button
                          type="submit"
                          className="bg-primary inline-flex items-center justify-center rounded-full py-4 px-5 text-center text-base font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                          onClick={showModalUpdate}
                        >
                          Изменить
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateProduct;
