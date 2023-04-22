import React from 'react';
import './styles/navbar.css';
import { NavLink, Outlet } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { useSelector } from 'react-redux';
import { User } from '../auth/types/types';
import { logoutUser, add } from '../auth/userSlice';

function Navbar(): JSX.Element {
  const dispatch = useAppDispatch();
  const { user } = useSelector((store: RootState) => store.auth);
  console.log(user);
  return (
    <>
      <div
        x-data="
        {
          navbarOpen: false
        }
      "
        className="flex w-full items-center navbar"
      >
        <div className="container mx-auto">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <NavLink to="/" className="block w-full py-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  className="w-full"
                >
                  <path
                    d="M8.50852 17.5785V13.0499L10.0334 12.9806C12.1129 12.8881 13.7534 12.3105 14.9549 11.2246C16.1794 10.1386 16.7802 8.70612 16.7802 6.95012C16.7802 3.27643 14.7469 1.17383 11.1194 1.17383H1.96973V17.5785H8.50852V17.5785ZM8.36992 5.61002H9.47892C10.4262 5.61002 10.8883 6.07212 10.8883 7.01942C10.8883 8.10542 10.2645 8.68302 9.31722 8.68302H8.36992V5.61002Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M19.9219 12.7263C19.9219 16.608 23.018 17.925 26.0679 17.925C28.4015 17.925 30.5965 17.2318 32.6529 15.8455L33.6233 17.7632H35.5179V6.95004C35.5179 2.49075 33.2305 0.827148 28.5864 0.827148C25.6982 0.827148 22.8794 1.45105 20.1761 2.67555L21.031 7.71254C23.5956 6.39554 25.7213 5.72544 27.4311 5.72544C28.4708 5.72544 29.0254 6.07204 29.0947 6.76524C26.7148 6.81144 24.6816 7.25044 23.018 8.10534C20.9616 9.14504 19.9219 10.6931 19.9219 12.7263V12.7263ZM26.6224 12.3104C26.6224 11.6173 27.4542 11.1552 29.1178 10.9472V12.4722C28.6326 12.8649 28.1242 13.0729 27.5466 13.0729C26.9228 13.0729 26.6224 12.8187 26.6224 12.3104Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M38.5322 16.839C40.3806 17.5553 42.7142 17.925 45.5099 17.925C51.2169 17.925 53.5967 16.2152 53.5967 13.096C53.5967 10.8548 52.1411 9.39924 49.5533 8.96024V8.86774C51.679 8.42874 52.996 7.25044 52.996 5.30954C52.996 2.32905 50.57 0.827148 45.7179 0.827148C43.338 0.827148 41.0275 1.17375 38.8325 1.89005L39.7105 6.34934C40.8889 5.88724 42.2521 5.65614 43.777 5.65614C45.4175 5.65614 46.0876 5.91034 46.0876 6.64964C46.0876 7.08864 45.7641 7.38904 45.094 7.50454C44.4471 7.62014 43.1763 7.66634 41.2817 7.64324V11.0858C43.338 11.0396 44.7706 11.0858 45.5561 11.2245C46.3417 11.34 46.7345 11.6404 46.7345 12.0794C46.7345 12.7494 46.18 13.096 44.3547 13.096C42.3907 13.096 40.7503 12.7956 39.4795 12.1949L38.5322 16.839V16.839Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M6.57952 35.9232V34.2596H12.171V35.9232H18.2476V29.5693H16.9306V19.5186H5.74772C5.58602 21.6289 5.05462 23.5736 4.13043 25.3795C3.22933 27.1856 2.25883 28.5757 1.21913 29.5693H0.50293V35.9232H6.57952V35.9232ZM7.78102 30.1238C9.09802 28.2985 9.92982 26.2344 10.2532 23.9663H11.1081L10.8078 30.1238H7.78102V30.1238Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M21.1229 30.181C21.0998 32.0988 21.5388 33.7392 23.0637 34.9176C24.0803 35.6339 25.767 36.096 28.0082 36.096C29.9722 36.096 32.0979 35.7725 34.3391 35.1256L33.9694 29.9731C32.4906 30.6432 31.0119 30.9897 29.5563 30.9897C28.2393 30.9897 27.5692 30.5738 27.5692 29.7189H32.4213V25.2596H27.2227V24.012L33.9001 24.1968V19.3447H21.1229V30.181V30.181Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M0.50293 54.706C1.24223 54.8678 2.00473 54.9602 2.81343 54.9602C5.05462 54.9602 6.48712 54.475 7.57302 52.9269C8.01202 52.3031 8.38172 51.4713 8.68212 50.3853C8.98252 49.2994 9.21352 48.3059 9.35212 47.4048C9.51392 46.5037 9.72182 45.695 9.97602 45.0249C10.2301 44.3549 10.5536 44.0083 10.9464 44.0083H11.1312L10.5536 50.8012V54.6136H17.0924V38.2089C15.0591 37.9779 13.488 37.8623 12.3789 37.8623C9.30592 37.8623 7.13402 38.6941 5.86332 40.3577C4.93913 41.5592 4.29212 43.4538 3.99172 44.9325L3.50652 47.012C3.15993 48.3059 2.55923 49.1377 1.54263 49.1377C1.28843 49.1377 1.03433 49.1146 0.733929 49.0452L0.50293 54.706V54.706Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M19.6562 53.9786C20.6035 54.2789 21.5739 54.4407 22.5674 54.4407C24.5082 54.4407 26.0332 53.7475 26.7726 52.8233C27.1422 52.3612 27.4657 51.8529 27.7199 51.3215C28.4823 49.7734 28.4592 48.2023 29.0138 48.2023H29.2448V54.0941H35.7836V37.6895H25.6866C24.0924 37.6895 22.8216 38.1747 21.8743 39.122C20.9269 40.0693 20.4648 41.2477 20.4648 42.6802C20.4648 44.9213 21.6201 46.377 23.9075 47.0932V47.1856C23.5378 47.3936 23.0295 48.1561 22.4057 48.5257C22.1053 48.6875 21.6894 48.7799 21.1811 48.7799C20.7652 48.7799 20.4186 48.7337 20.1414 48.6182L19.6562 53.9786V53.9786ZM26.865 42.9343C26.865 41.9871 27.3271 41.525 28.2744 41.525H29.3834V44.3899H28.4361C27.3964 44.3899 26.865 43.9047 26.865 42.9343Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M43.187 54.3135L47.6001 49.7156L47.5307 54.2211H53.0529V41.5132H48.7322L44.5271 46.3191L44.5964 41.5132H39.0742V54.2211L43.187 54.3135V54.3135ZM41.0382 37.8164C41.0382 39.9652 43.0252 40.9587 46.1444 40.9587C49.2636 40.9587 51.2507 39.9652 51.2507 37.8164H47.5769C47.5769 38.4865 47.0917 38.8099 46.1444 38.8099C45.1971 38.8099 44.7119 38.4865 44.7119 37.8164H41.0382Z"
                    fill="white"
                  ></path>{' '}
                  <path
                    d="M46.8896 27.0965C46.9465 27.3214 46.5039 27.7434 45.5619 28.3626C45.4316 28.4499 45.2471 28.57 45.0084 28.7228C44.7698 28.8758 44.4806 29.055 44.1409 29.2606C43.9622 29.3711 43.7809 29.4822 43.5971 29.5939C43.4132 29.7058 43.2255 29.8131 43.034 29.9159C42.633 30.1371 42.3508 30.2684 42.1872 30.3098C41.7987 30.4081 41.4723 30.322 41.2081 30.0517L40.611 29.2399L39.9473 30.6153L39.5929 31.472C39.4633 31.7767 39.3373 31.9446 39.2145 31.9757C39.0816 32.0093 38.9556 31.9732 38.8363 31.8674C38.7171 31.7616 38.6406 31.6422 38.607 31.5093C38.5811 31.4071 38.6088 31.2369 38.69 30.9988C38.7128 30.9169 38.7477 30.8183 38.7946 30.7031C38.8416 30.5878 38.9032 30.4444 38.9795 30.2728L39.277 29.6428L39.819 28.6897L40.1855 28.0095C40.2643 27.8481 40.3317 27.7169 40.3877 27.6157C40.4436 27.5144 40.4767 27.4409 40.4868 27.3948C40.5096 27.3129 40.5335 27.1491 40.5583 26.9035C40.573 26.6604 40.5879 26.5261 40.6032 26.5005C40.6582 26.0297 40.7777 25.7709 40.9617 25.7244C41.1661 25.6727 41.367 25.6926 41.5642 25.7841L41.9447 25.9979C42.1132 25.89 42.2619 25.8007 42.3909 25.73C42.5199 25.6593 42.6329 25.6008 42.7299 25.5544C42.827 25.5081 42.9158 25.472 42.9963 25.4462C43.0768 25.4204 43.163 25.3959 43.255 25.3726C43.5004 25.3105 43.6962 25.3317 43.8423 25.4362C43.9884 25.5406 44.086 25.6899 44.1351 25.8842C44.1895 26.099 44.1363 26.319 43.9759 26.5446C43.8154 26.7701 43.6534 26.9035 43.4897 26.945C43.3542 26.9684 43.2645 26.8932 43.2206 26.7194C43.205 26.658 43.2304 26.5755 43.2965 26.4717C43.3628 26.368 43.3933 26.3058 43.3881 26.2853C43.3955 26.1856 43.3288 26.1371 43.1882 26.1401C43.1141 26.1481 43.0055 26.1918 42.8625 26.2715C42.7194 26.3512 42.572 26.4456 42.4201 26.5548C42.2683 26.6639 42.1324 26.7717 42.0124 26.8782C41.8925 26.9847 41.8224 27.0623 41.8021 27.1109L41.8338 27.4945C41.8418 27.6122 41.7659 27.8925 41.606 28.3354C41.5376 28.5377 41.5124 28.6746 41.5305 28.7462C41.6159 29.0835 41.7054 29.3085 41.7991 29.4207C41.8927 29.533 42.0111 29.571 42.1543 29.5348C42.2463 29.5115 42.5744 29.3469 43.1389 29.0408L43.9241 28.5974C44.1438 28.4766 44.4202 28.3114 44.7535 28.102C45.0867 27.8926 45.4817 27.6376 45.9387 27.3371C46.332 27.0852 46.5438 26.9555 46.5746 26.9477C46.6972 26.9167 46.7733 26.9056 46.8028 26.9144C46.8321 26.9233 46.8611 26.984 46.8896 27.0965V27.0965ZM53.524 25.9726C53.5473 26.0646 53.3562 26.3414 52.9508 26.8029C52.5326 27.2569 52.1449 27.6161 51.7876 27.8806C51.5043 28.0937 51.2151 28.2837 50.9202 28.4509C50.6252 28.6179 50.3704 28.7286 50.1556 28.783C49.9103 28.8451 49.6672 28.8414 49.4266 28.7717C49.186 28.7021 48.9631 28.5843 48.758 28.4187L47.9432 29.2612C47.6395 29.523 47.3293 29.694 47.0124 29.7742C46.7056 29.8518 46.4574 29.8384 46.2679 29.7341C46.0783 29.6298 45.9602 29.4856 45.9137 29.3016C45.8516 29.0562 45.8685 28.7255 45.9645 28.3096C46.0606 27.8936 46.2255 27.4386 46.4594 26.9442C46.5916 26.6497 46.7277 26.3922 46.8678 26.1718C47.0078 25.9515 47.1773 25.74 47.3763 25.5373C47.7457 25.0196 48.1243 24.5811 48.512 24.2219C48.9329 23.8217 49.2967 23.5828 49.6034 23.5052C49.8795 23.4353 50.1289 23.4321 50.3516 23.4954C50.6358 23.5866 50.8167 23.7856 50.8943 24.0924C50.9642 24.3684 50.9503 24.6793 50.8528 25.0248C50.7554 25.3704 50.5894 25.7251 50.3551 26.089C50.3247 26.1403 50.273 26.2158 50.2004 26.3158C50.1278 26.4158 50.0355 26.5452 49.9233 26.7041C49.6176 27.1296 49.4919 27.4497 49.5462 27.6644C49.5721 27.7667 49.644 27.8573 49.7619 27.9362C49.8798 28.0152 49.9796 28.0443 50.0614 28.0236C50.4806 27.9175 50.9607 27.6655 51.5018 27.2675C51.6474 27.1545 51.8241 27.0037 52.032 26.8152C52.2399 26.6265 52.4765 26.39 52.7417 26.1052C52.9559 25.877 53.0885 25.7564 53.1397 25.7434C53.2113 25.7253 53.2855 25.7392 53.3623 25.785C53.4392 25.8308 53.4931 25.8933 53.524 25.9726V25.9726ZM50.235 24.3245C50.2221 24.2733 50.1785 24.23 50.1042 24.1944C50.0299 24.1587 49.9506 24.1462 49.8662 24.1567C49.6438 24.1803 49.3373 24.3667 48.947 24.7156C48.6281 25.003 48.3782 25.2838 48.1973 25.558C48.1439 25.6477 48.095 25.7552 48.0506 25.8808C48.0061 26.0062 47.9738 26.0933 47.9535 26.1419C47.9359 26.2443 47.9226 26.321 47.9138 26.3722C47.9051 26.4234 47.8879 26.4848 47.8625 26.5565C47.8093 26.6897 47.7399 26.835 47.6548 26.9926C47.5695 27.1502 47.4988 27.2686 47.4428 27.3481C47.5274 27.4246 47.5858 27.4724 47.6178 27.4914C47.6498 27.5106 47.7298 27.5365 47.8578 27.5695L48.3786 27.2419C48.5931 27.1006 48.8023 26.917 49.0064 26.6914C49.0752 26.6196 49.1402 26.5433 49.2014 26.4625C49.2625 26.3818 49.3224 26.3068 49.381 26.2376C49.4371 26.1581 49.5027 26.0626 49.5779 25.9512C49.6529 25.8398 49.7236 25.7212 49.7897 25.5956C49.8559 25.4702 49.9201 25.3479 49.9825 25.2287C50.0448 25.1096 50.095 24.9962 50.133 24.8887C50.2295 24.625 50.2635 24.4369 50.235 24.3245V24.3245ZM47.2458 28.2464L46.9384 28.0632C46.8288 28.2323 46.7494 28.3912 46.7 28.5396C46.6505 28.6881 46.6439 28.834 46.6801 28.9771C46.6982 29.0486 46.7699 29.074 46.8951 29.0532C47.0306 29.0298 47.1731 28.9585 47.3223 28.8391C47.4716 28.7197 47.5819 28.5857 47.6531 28.4372L47.2458 28.2464V28.2464Z"
                    fill="black"
                  ></path>{' '}
                </svg>
              </NavLink>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  //  @click="navbarOpen = !navbarOpen"
                  //  :className="navbarOpen && 'navbarTogglerActive' "
                  //  id="navbarToggler"

                  // адаптив выпадающая панель меню
                  className="ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                  <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                  <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
                >
                  {'id' in user ? (
                    <ul className="block lg:flex">
                      <li onClick={() => dispatch(add())}>
                        <h1>{user.email}</h1>
                      </li>
                      <li>
                        <NavLink
                          to="/taxi"
                          className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex navitem"
                        >
                          Эко-такси
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/events"
                          className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex navitem"
                        >
                          Мероприятия
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/shop"
                          className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex navitem"
                        >
                          Магазин
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/containers"
                          className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex navitem"
                        >
                          Контейнеры
                        </NavLink>
                      </li>
                      <li>
                        <button
                          className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex navitem"
                          onClick={() => dispatch(logoutUser())}
                        >
                          Выход
                        </button>
                      </li>
                    </ul>
                  ) : (
                    <ul className="block lg:flex">
                      <li>
                        <NavLink
                          to="/taxi"
                          className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex navitem"
                        >
                          Эко-такси
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/events"
                          className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex navitem"
                        >
                          Мероприятия
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/shop"
                          className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex navitem"
                        >
                          Магазин
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/containers"
                          className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex navitem"
                        >
                          Контейнеры
                        </NavLink>
                      </li>
                    </ul>
                  )}
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <NavLink
                  to="/signin"
                  className="text-dark hover:text-primary py-3 px-7 text-base font-medium navitem"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/signup"
                  className="bg-primary rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90 navitem"
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
