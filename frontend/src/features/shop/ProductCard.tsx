import React, { useState } from 'react';
import { Product } from './types/Products';
import { Link } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import './styles/shop.css';
import { removeProduct } from './productsSlice';
import { useSelector } from 'react-redux';
import { addToCart } from './cart/CartSlice';
import ModalProductInfo from './ModalProductInfo';

function ProductCard({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useSelector((store: RootState) => store.auth);
  

  const [showModal, setShowModal] = useState(false);

  const showModalWindow = (): void => {
    setShowModal((prev) => !prev);
  };

  const handleRemoveProduct = (): void => {
    if (product.id) {
      dispatch(removeProduct(product.id));
    }
  };

  // fn for future adding products to cart:

  const addProductToCart = (): void => {
    const productId = product.id;
    if (productId) {
      dispatch(addToCart(productId));
    }
  };

  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/3" onClick={showModalWindow}>
        <div className="mb-10 overflow-hidden rounded-lg bg-white">
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

            {/* <p className="text-body-color mb-7 text-base leading-relaxed">
              {product.productDescript}
            </p> */}
            {/* <Link
              to={`/shop/${product.id}`}
              className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
            >
              Подробнее
            </Link> */}
          </div>
          {/* <div className="btns-group">
            <button
              onClick={handleRemoveProduct}
              type="button"
              className="btn-del-product"
            >
              Удалить запись
            </button>
            <div>
              <button className="btn-cart" onClick={addProductToCart}>
                В корзину
              </button>
              <select className="size-selector">
                <option>{product['ProductSizes.Size.sizeText']}</option>
              <option>{product['ProductSizes.Size.sizeText']}</option>
                <option>L</option>
              </select>
            </div>
          </div> */}
        </div>
      </div>
      {showModal && (
        <ModalProductInfo showModalWindow={showModalWindow} product={product} />
      )}
    </>
  );
}

export default ProductCard;
