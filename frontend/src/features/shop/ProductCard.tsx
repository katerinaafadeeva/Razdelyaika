import React, { useState } from 'react';
import { Product } from './types/Products';
// import { Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import './styles/shop.css';
import { getProdImgs, removeProduct } from './productsSlice';
// import { useSelector } from 'react-redux';
import { addToCart } from './cart/CartSlice';
import ModalProductInfo from './ModalProductInfo';
import ModalUpdateProduct from './ModalUpdateProduct';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

function ProductCard({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useSelector((store: RootState) => store.auth);

  const [showModal, setShowModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const showModalWindow = async (): Promise<void> => {
    const productId = product.id;
    await dispatch(getProdImgs(productId));
    setShowModal((prev) => !prev);
  };

  const showModalUpdate = async (): Promise<void> => {
    const productId = product.id;
    // await dispatch(productId);
    setShowUpdate((prev) => !prev);
  };

  const handleRemoveProduct = (): void => {
    console.log(product);
    if (product.id) {
      dispatch(removeProduct(product.id));
    }
  };

  const addProductToCart: React.MouseEventHandler<HTMLButtonElement> = (event): void => {
    const productId = product.id;
    if (productId) {
      dispatch(addToCart(productId));
    }
  };

  const foo = product['ProductSizes.Size.sizeText'];

  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/3 ">
        <div className="mb-10 overflow-hidden rounded-lg bg-white ">
          <button>
            <img
              src={`${product['ProductImgs.productImg']}`}
              alt="merch_img"
              className="w-full min__h"
              onClick={showModalWindow}
            />
          </button>
          <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
            <button>
              <h3 onClick={showModalWindow}>{product.productName}</h3>
            </button>
            <p className="text-body-color mb-7 text-base leading-relaxed" onClick={showModalWindow}>
              {product.productPrice}
            </p>
          </div>
          <div className="btns-group">

            {Object.values(user).includes(1) ? (
              <>
                <button
                  onClick={showModalUpdate}
                  type="button"
                  className="btn-del-product"
                >
                  Редактировать
                </button>
                <button
                  onClick={handleRemoveProduct}
                  type="button"
                  className="btn-del-product"
                >
                  Удалить запись
                </button>
              </>
            ) : (
              <div>
                {'id' in user && !Object.values(user).includes(1) ? (
                  <>
                    <button className="btn-cart" onClick={addProductToCart}>
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
                ) : (
                  <a href="/signin">
                    <button className="btn-cart" onClick={addProductToCart}>
                      купить продукт
                    </button>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {showUpdate && (
        <ModalUpdateProduct
          showModalUpdate={showModalUpdate}
          product={product}
        />
      )}
      {showModal && (
        <ModalProductInfo showModalWindow={showModalWindow} product={product} />
      )}

    </>
  );
}

export default ProductCard;
