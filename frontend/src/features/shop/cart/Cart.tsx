import { type } from 'os';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import CartItem from './CartItem';

// type productPrice = any;

function Cart(): JSX.Element {
  const { products } = useSelector((store: RootState) => store.cartState);
  // console.log(products.productPrice);
  // function summ( ) {
  //   const result = products?.reduce((a:number, b:number) => a + b.productPrice, 0);
  // }
  // console.log(summ);
  // const [suum, setSumm] = useState(0);

  const summa = (): string => {
    let her = products?.reduce((a, b) => a + b.productPrice, 0);
    if (her === 0) {
      return 'Корзина пуста';
    } else {
      return '';
    }
  };

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
            {products?.reduce((a, b) => a + b.productPrice, 0) ? (
              <h3>
                Общая сумма: {products?.reduce((a, b) => a + b.productPrice, 0)}
                ₽
              </h3>
            ) : (
              <h3>Корзина пуста : (</h3>
            )}
            <button className="btn-cart-cart">Купить</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
