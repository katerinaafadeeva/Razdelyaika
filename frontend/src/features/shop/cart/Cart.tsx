import { type } from 'os';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import CartItem from './CartItem';

// type productPrice = any;

function Cart(): JSX.Element {
  const { products } = useSelector((store: RootState) => store.cartState);
  // console.log(products.productPrice);
  const summ = (): any => {
    const result = products?.reduce((a, b) => a + b.productPrice, 0);
    return result;
  };
  console.log(summ);

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container mx-auto">
        КОРЗИНОЧКА
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr
                    className="bg-primary text-center"
                    style={{ backgroundColor: '#309959' }}
                  >
                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      продукт
                    </th>
                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      описание
                    </th>
                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      стоимость
                    </th>
                    <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      кол-во
                    </th>
                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      размер
                    </th>
                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"></th>
                  </tr>
                  {products?.map((product) => (
                    // <tbody>
                    <CartItem key={product.id} product={product} />
                    // </tbody>
                  ))}
                </thead>
              </table>
            </div>
          </div>
          <div>
            <h3>
              {products?.reduce((a, b) => a + b.productPrice, 0)}: Них*** ты
              набрал конечно
            </h3>
            <button className="btn-cart-cart">Купить</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
