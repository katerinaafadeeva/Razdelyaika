import React, { useState } from 'react';
import '../modals/modalsStyle.css';
import { Product } from './types/Products';
import { RootState, useAppDispatch } from '../../store';
import { addToCart } from '../shop/cart/CartSlice';
import { useSelector } from 'react-redux';
import SwiperInProdModal from './SwiperInProdModal';
import { v4 as uuidv4 } from 'uuid';
// import SolutionModal from './SolutionModal';

function ModalProductInfo({
  showModalWindow,
  product,
}: {
  showModalWindow: () => void;
  product: Product;
}): JSX.Element {
  const dispatch = useAppDispatch();
  const addProductToCart = (): void => {
    const productId = product.id;
    if (productId) {
      dispatch(addToCart(productId));
    }
    showModalWindow();
  };

  const { user } = useSelector((store: RootState) => store.auth);
  const foo = product['ProductSizes.Size.sizeText'];
  console.log('sizes in modal', foo);

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
                onClick={showModalWindow}
                style={{
                  fontSize: '1.8rem',
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="w-full px-4 ">
                {/* onClick={showModalWindow} */}{' '}
                <div className="overflow-hidden rounded-lg bg-white">
                  {' '}
                  <SwiperInProdModal />
                  {/* <img
                    src={`${product['ProductImgs.productImg']}`}
                    alt="merch_img"
                    className="w-full"
                  /> */}
                  <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                    <h3>{product.productName}</h3>
                    <p className="text-body-color mb-7 text-base leading-relaxed">
                      {product.productPrice}₽
                    </p>
                    {/* {product.id && (
            <h3>{`${product.id['ProductSizes.Size.sizeText']}`} размера</h3>
          )} */}

                    <p className="text-body-color mb-7 text-base leading-relaxed">
                      {product.productDescript}
                    </p>
                    {/* <Link
                  to={`/shop/${product.id}`}
                  className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                >
                  Подробнее
                </Link> */}
                  </div>
                  <div className="btns-group">
                    <div>
                      {Object.values(user).includes(1) ? (
                        <></>
                      ) : (
                        <>
                          <button
                            className="btn-cart"
                            onClick={addProductToCart}
                          >
                            В корзину
                          </button>
                          {foo?.length ? (
                            <select className="size-selector">
                              {foo.map((size: string) => (
                                <option key={uuidv4()}>{size}</option>
                              ))}
                            </select>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                      {/* (<div><p>пожалуйста,войдите в систему</p></div>) */}
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
}

export default ModalProductInfo;
