import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addProduct } from './productsSlice';

function FormAddProduct(): JSX.Element {
  const dispatch = useAppDispatch();
  const [newproductName, setProductName] = useState('');
  const [newproductPrice, setProductPrice] = useState(0);
  const [newproductDescript, setproductDescript] = useState('');

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(
      addProduct({
        productName: newproductName,
        productPrice: newproductPrice,
        productDescript: newproductDescript,
      })
    );
  };
  return (
    <form onSubmit={handleAddProduct}>
      <input
        type="text"
        value={newproductName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        type="text"
        value={newproductPrice}
        onChange={(e) => setProductPrice(Number(e.target.value))}
      />
      <input
        type="text"
        value={newproductDescript}
        onChange={(e) => setproductDescript(e.target.value)}
      />
      <button type="submit">добавить продукт</button>
    </form>
  );
}

export default FormAddProduct;
