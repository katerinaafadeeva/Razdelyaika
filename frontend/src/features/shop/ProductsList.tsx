import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import ProductCard from './ProductCard';
import { Outlet } from 'react-router-dom';
import FormAddProduct from './FormAddProduct';
import { getSizes } from './productsSlice';

function ProductsList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { products } = useSelector((store: RootState) => store.productsState);
  const [showModal, setShowModal] = useState(false);

  const showModalWindow = (): void => {
    setShowModal((prev) => !prev);
  };

  console.log('products in productList', products);

  return (
    <>
      <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {products ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <h1>Менча нет</h1>
            )}
          </div>
          <FormAddProduct />
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default ProductsList;
