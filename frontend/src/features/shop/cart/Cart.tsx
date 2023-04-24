import React from 'react';

// component for added products:

function Cart(): JSX.Element {
  return (
    <>
      <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {/* {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))} */}
          </div>

        </div>
      </section>
      {/* <Outlet /> */}
    </>
  );
}

export default Cart;
