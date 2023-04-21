import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function ProductsList(): JSX.Element {
  return (
    <div>
      <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {/* <div className="w-full px-4 md:w-1/2 xl:w-1/3">
              <div className="mb-10 overflow-hidden rounded-lg bg-white">
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <p className="text-body-color mb-7 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet pretium consectetur adipiscing
                    elit. Lorem consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div> */}
            {}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsList;
