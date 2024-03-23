import React from "react";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="w-full h-screen bg-[url('/images/banner-3.png')] bg-center bg-cover grid grid-cols-1 items-center"
      >
        <div>
          <h5 className="text-red-600 font-medium capitalize text-lg">Anu</h5>
          <h1 className="text-black text-6xl capitalize font-semibold leading-[1.1] mt-[6px] mb-[10px]">
            New Anu <br /> Collection 2024
          </h1>
          <p className="text-slate-800 text-xl italic mb-5">
            There's Nothing like Trend
          </p>

          <a
            href=""
            className="items-center inline-block text-black text-base font-medium capitalize border border-black py-3 px-6 transition-all duration-500 ease-out hover:bg-black hover:text-white"
          >
            Shop Now
            <i className="bx bx-right-arrow-alt align-middle"></i>
          </a>

          <div className="absolute top-[85%] right-[11%]">
            <a href="#trending" className="">
              <i className="bx bx-down-arrow-alt text-3xl text-slate-800 border border-slate-800 rounded-[50%] p-3 transition-all duration-500 ease-out hover:bg-black hover:text-white"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
