import React, { useState } from 'react';
import { useAppDispatch } from '../../store';

import { useParams } from 'react-router-dom';
import { updateProduct } from './productsSlice';
import { Product } from './types/Products';

const ModalUpdateProduct = ({
  showModalUpdate,
  product,
}: {
  showModalUpdate: () => void;
  product: Product;
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const { productId } = useParams();
  const [updproductName, setUpdProductName] = useState('');
  const [updproductPrice, setUpdProductPrice] = useState(0);
  const [updproductDescript, setUpdproductDescript] = useState('');

  const handleUpdateProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      updateProduct({
        id: Number(productId),
        productName: updproductName,
        productPrice: updproductPrice,
        productDescript: updproductDescript,
      })
    );
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
                          // onChange={(e) => setProductName(e.target.value)}
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
                          // onChange={(e) => setProductPrice(e.target.value)}
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
                          // onChange={(e) => setproductDescript(e.target.value)}
                          name="description"
                        />
                        <label
                          htmlFor=""
                          className="mb-3 block text-base font-medium text-black"
                        >
                          Доступные размеры
                        </label>
                        {/* {sizes.map((size) => (
                          <>
                            <label>{size}</label>
                            <input
                              type="checkbox"
                              className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD] raz"
                              defaultValue={size}
                              // checked={newproductSize.includes(size) ? }
                              // onChange={(e) =>
                              //   setProductSize((prev) =>
                              //     prev.includes(size) ? prev : [...prev, size]
                              //   )
                              // }
                              name="sizes"
                            />
                          </>
                        ))} */}
                        {/* <input
                          style={{ display: 'none' }}
                          required
                          type="text"
                          className="border-form-stroke text-body-color placeholder-body-color focus:border-primary active:border-primary w-full rounded-lg border-[1.5px] py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-[#F5F7FD] raz"
                          value={Object.values(imgs)
                            .map((img) => img.name)
                            .join()}
                          name="imgs"
                        /> */}
                        {/* <Uploader /> */}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUpdateProduct;