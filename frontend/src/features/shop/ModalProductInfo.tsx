import React, { useState } from 'react';
import '../modals/modalsStyle.css';
import { Product } from './types/Products';
import { RootState, useAppDispatch } from '../../store';
import { addToCart } from '../shop/cart/CartSlice';
import { useSelector } from 'react-redux';
// import SolutionModal from './SolutionModal';

function GeneralModal({
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
  };
  const { user } = useSelector((store: RootState) => store.auth);
  return (
    <div className="modal generalModal">
      <div className="modal-dialog" tabIndex={-1}>
        <div className="modal-content">
          <div className="modal-header">
            <div className="headerCross">
              <div></div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={showModalWindow}
                style={{ fontSize: '1.8rem' }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <div className="w-full px-4 " onClick={showModalWindow}>
                {' '}
                <div className="overflow-hidden rounded-lg bg-white">
                  {' '}
                  <img
                    src={`${product['ProductImgs.productImg']}`}
                    alt="merch_img"
                    className="w-full"
                  />
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
                    {Object.values(user).includes(1) ? (
                      <button
                        // onClick={handleRemoveProduct}
                        type="button"
                        className="btn-del-product"
                      >
                        Удалить запись
                      </button>
                    ) : (
                      <></>
                    )}

                    <div>
                      {Object.values(user).includes(1) ? (
                        <></>
                      ) : (
                        <button className="btn-cart" onClick={addProductToCart}>
                          В корзину
                        </button>
                      )}

                      <select className="size-selector">
                        {/* <option>{product['ProductSizes.Size.sizeText']}</option>
              <option>{product['ProductSizes.Size.sizeText']}</option> */}
                        {/* <option>L</option> */}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="modal-header">
            <div className="headerCross">
              <h5 className="modal-title formHeader">
                General Modal Window for any shit
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={showModalWindow}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form action="/authentication/login" method="POST" id="formLog">
              <div className="mb-3">
                <label htmlFor="email" className="form-label" />
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  // required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label" />

                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  // required
                />
              </div>
              <div className="testing">
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
                <h1>Lorem for procrutka testing</h1>
              </div>
            </form>
          </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralModal;
