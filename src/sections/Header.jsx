import React from "react";

const Header = () => {
  return (
    <>
      <header className="fixed w-full top-0 right-0 z-50 flex items-center justify-between py-[20px] px-[10%]">
        <a href="#" className="">
          <img src="images/logo.png" alt="" className="max-w-[120px] h-auto" />
        </a>

        <ul className="flex">
          <li>
            <a
              href=""
              className="text-slate-800 text-[1rem] capitalize py-[10px] px-[20px] font-normal transition-all duration-500 ease-out hover:text-red-600"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-slate-800 text-[1rem] capitalize py-[10px] px-[20px] font-normal transition-all duration-500 ease-out hover:text-red-600"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-slate-800 text-[1rem] capitalize py-[10px] px-[20px] font-normal transition-all duration-500 ease-out hover:text-red-600"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-slate-800 text-[1rem] capitalize py-[10px] px-[20px] font-normal transition-all duration-500 ease-out hover:text-red-600"
            >
              Page
            </a>
          </li>
          <li>
            <a
              href=""
              className="text-slate-800 text-[1rem] capitalize py-[10px] px-[20px] font-normal transition-all duration-500 ease-out hover:text-red-600"
            >
              Docs
            </a>
          </li>
        </ul>

        <div className="flex items-center">
          <a href="">
            <i className="mr-5 text-slate-800 text-xl font-normal transition-all duration-500 ease-out hover:scale-110 hover:text-red-600 bx bx-search"></i>
          </a>
          <a href="">
            <i className="mr-5 text-slate-800 text-xl font-normal transition-all duration-500 ease-out hover:scale-110 hover:text-red-600 bx bx-user"></i>
          </a>
          <a href="">
            <i className="mr-5 text-slate-800 text-xl font-normal transition-all duration-500 ease-out hover:scale-110 hover:text-red-600 bx bx-cart"></i>
          </a>

          <div
            className="mr-5 text-slate-800 text-2xl z-50 cursor-pointer font-normal transition-all duration-500 ease-out hover:scale-110 hover:text-red-600 bx bx-menu"
            id="menu-icon"
          ></div>
        </div>
      </header>
    </>
  );
};

export default Header;
