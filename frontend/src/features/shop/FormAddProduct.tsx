import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { Product } from './productsSlice';

function FormAddProduct(): JSX.Element {
  const dispatch = useAppDispatch();
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescript, setproductDescript] = useState('');

  const addProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addProduct({
        productName: productName,
        productPrice: productPrice,
        productDescript: productDescript,
      })
    );
  };
  return (
    <form onSubmit={}>
      <input type="text" value={} onChange={(e) => e.target.value} />
      <button type="submit">add product</button>
    </form>
  );
}

export default FormAddProduct;
