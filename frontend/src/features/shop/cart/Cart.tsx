import { type } from 'os';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import CartItem from './CartItem';
import { getCartProducts } from './CartSlice';
import '../styles/shop.css';

// type productPrice = any;

function Cart(): JSX.Element {
  const { addedProds } = useSelector((store: RootState) => store.cartState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  return (
    <section className="bg-white py-20 lg:py-[120px] cart_my_cart">
      <div className="container mx-auto">
        КОРЗИНОЧКА
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full ">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-primary text-center" style={{ backgroundColor: '#309959' }}>
                    <th className="w-1/6 min-w-[160px] border-l border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      продукт
                    </th>
                    {/* <th className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4">
                      фото
                    </th> */}
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
                  </tr>
                  {addedProds?.map((addedProd) => (
                    // <tbody>
                    <CartItem key={addedProd.id} addedProd={addedProd} />
                    // </tbody>
                  ))}
                </thead>
              </table>
            </div>
          </div>
          <div className="cart_btn_bye">
            {addedProds?.reduce((a, b) => a + b['Product.productPrice'], 0) ? (
              <h3>
                Общая сумма: {addedProds?.reduce((a, b) => a + b['Product.productPrice'], 0)}₽
              </h3>
            ) : (
              <h3>Корзина пуста</h3>
            )}
            <button className="btn-cart-cart">Купить</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
