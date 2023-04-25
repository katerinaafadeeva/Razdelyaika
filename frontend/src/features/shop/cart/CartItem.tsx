import React from 'react';
import { Product } from '../types/Products';
import { useAppDispatch } from '../../../store';
// import '../styles/shop.css';

function CartItem({ product }: { product: Product }): JSX.Element {
  const dispatch = useAppDispatch();
  // fn for future adding products to cart:

  return (
    <tr>
      <td className="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        <a href={`/shop/${product.id}`}>{product.productName}</a>
      </td>
      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        {product.productDescript}
      </td>
      <td className="text-dark border-b border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium">
        {product.productPrice}
      </td>
      <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        {`${product['AddedProducts.count']}`}
      </td>
      {/* <td className="text-dark border-b border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        {`${product['ProductSizes.Size.sizeText']}`}
      </td> */}
      <td className="text-dark border-b border-r border-[#E8E8E8] bg-white py-5 px-2 text-center text-base font-medium">
        <button className="border-primary text-primary hover:bg-primary inline-block rounded border py-2 px-6 hover:text-white">
          Удалить из корзины
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
