import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import CartItem from './CartItem';

// component for added products:

function Cart(): JSX.Element {
  const { products } = useSelector((store: RootState) => store.productsState);
  console.log(products, '>>>>>>>>');

  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-primary text-center">
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
                    <th className="w-1/6 min-w-[160px] border-r border-transparent py-4 px-3 text-lg font-semibold text-white lg:py-7 lg:px-4"></th>
                  </tr>
                  {products?.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;