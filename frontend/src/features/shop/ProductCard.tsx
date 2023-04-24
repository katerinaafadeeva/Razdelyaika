import React from 'react';
import { Product } from './types/Products';
import { Link } from 'react-router-dom';

import { RootState, useAppDispatch } from '../../store';

import { removeProduct } from './productsSlice';

function ProductCard({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();

  const handleRemoveProduct = (): void => {
    dispatch(removeProduct(product.id));
  };

  // fn for suture adding products to cart:
  // const addProductToCart = (): void => {
  //   dispatch(addProductToCart(product.id));
  // };

  return (
    <div className="w-full px-4 md:w-1/2 xl:w-1/3">
      <div className="mb-10 overflow-hidden rounded-lg bg-white">
        <img
          src={`${product['ProductImgs.productImg']}`}
          alt="image"
          className="w-full"
        />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>{product.productName}</h3>
          <p className="text-body-color mb-7 text-base leading-relaxed">
            {product.productPrice}₽
          </p>

          <p className="text-body-color mb-7 text-base leading-relaxed">
            {product.productDescript}
          </p>
          <Link
            to={`/shop/${product.id}`}
            className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
          >
            Подробнее
          </Link>
        </div>
        <div className="btns-group">
          <button
            onClick={handleRemoveProduct}
            type="button"
            className="btn-del-product"
          >
            Удалить запись
          </button>
          <button className="btn-cart">в корзину</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
