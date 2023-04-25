import React from 'react';
import { Product } from '../types/Products';
import { useAppDispatch } from '../../../store';
import { removeCartItem } from './CartSlice';
// import '../styles/shop.css';

function CartItem({ addedProd }: { addedProd: Product }): JSX.Element {
  const dispatch = useAppDispatch();
  // fn for future adding products to cart:

  // fn for deleting item:
  const cartItemDelete = (): void => {
    console.log(addedProd.id);
    if (addedProd.id) {
      const addedProdId = addedProd.id;
      dispatch(removeCartItem(addedProdId));
    }
  };
  return (
    <tr>
      <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        <a href={`/shop/${addedProd.id}`}>{addedProd['Product.productName']}</a>
      </td>
      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        {addedProd['Product.productDescript']}
      </td>
      <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        {addedProd['Product.productPrice']}
      </td>
      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        {`${addedProd.count}`}
      </td>
      {/* <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        {`${product['ProductSizes.Size.sizeText']}`}
      </td> */}
      <td className="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        <button
          className="border-primary text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white"
          onClick={cartItemDelete}
        >
          Удалить из корзины
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
