import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';

function ProductsList(): JSX.Element {
  const { products } = useSelector((store: RootState) => store.productsState);
  return (
    <>
      <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default ProductsList;
