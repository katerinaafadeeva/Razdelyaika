import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import store, { RootState } from '../../store';

function ProductParams(): JSX.Element {
  const { products } = useSelector((store: RootState) => store.productsState);
  const { productId } = useParams();
  const [product] = products.filter((el) => el.id === Number(productId));
  return (
    <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-lg bg-white">
              <img
                // src={`${product['ProductImgs.productImg']}`}
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductParams;
