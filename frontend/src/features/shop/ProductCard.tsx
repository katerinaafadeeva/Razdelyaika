import React from 'react';
import { Product } from './types/Products';

function ProductCard({ product }: { product: Product }): JSX.Element {
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
            {product.productPrice}
          </p>
          <p className="text-body-color mb-7 text-base leading-relaxed">
            {product.productDescript}
          </p>
          <a
            href={`/shop/${product.id}`}
            className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
          >
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
