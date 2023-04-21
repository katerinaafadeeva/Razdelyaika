import React from 'react';

function EventItemDiscription(): JSX.Element {
  return (
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-6/12">
            <div className="-mx-3 flex items-center sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-1.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-2.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/marketing/images/about/about-01/image-3.jpg"
                    alt=""
                    className="w-full rounded-2xl"
                  />
                  <span className="absolute -right-7 -bottom-7 z-[-1]"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span className="text-primary mb-2 block text-lg font-semibold">Why Choose Us</span>
              <h2 className="text-dark mb-8 text-3xl font-bold sm:text-4xl">
                Make your customers happy by giving services.
              </h2>
              <p className="text-body-color mb-8 text-base">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less.
              </p>
              <p className="text-body-color mb-12 text-base">
                A domain name is one of the first steps to establishing your brand. Secure a
                consistent brand image with a domain name that matches your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventItemDiscription;
