import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <header className="flex gap-5 justify-between items-start self-end w-full max-w-[1218px] min-w-[1200px] mx-auto px-4 2xl:max-w-[1400px] max-xl:min-w-0 max-md:max-w-full">
        <div className="flex items-center text-xs leading-none text-indigo-900 h-[46px]">
          <span className="self-stretch my-auto">
            CERTIFIED BY
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23f7f9f7e647710aeb3e1cee25be4db36563f4b9?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
            alt="Certification logo"
            className="object-contain shrink-0 self-stretch my-auto aspect-[2.87] w-[132px]"
          />
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2ce2605a742a060f59f13ea1879022aa968d4e0?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
          alt="Konnifel logo"
          className="object-contain shrink-0 mt-1 max-w-full aspect-[3.68] w-[162px]"
        />
        <nav className="flex gap-8 self-stretch text-xl whitespace-nowrap">
          <div className="flex flex-auto gap-3 self-start">
            <button
              className="overflow-hidden gap-2.5 self-stretch px-10 py-2.5 text-white bg-rose-800 min-h-[50px] max-md:px-5"
            >
              Register
            </button>
            <div className="text-rose-800">
              <button
                className="overflow-hidden gap-2.5 self-stretch px-7 py-2.5 bg-white border-2 border-rose-800 border-solid min-h-[50px] max-md:px-5"
              >
                Login
              </button>
              {/* <button
                className="overflow-hidden z-10 gap-2.5 self-stretch px-7 py-2.5 mt-0 bg-white border-2 border-rose-800 border-solid min-h-[50px] max-md:px-5"
              >
                Login
              </button> */}
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd78da72e7485ab21e4d8c0fb83a66bd8feca2c?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
            alt="Menu icon"
            className="object-contain shrink-0 aspect-[0.91] w-[54px]"
          />
        </nav>
      </header>
      <nav className="flex overflow-hidden flex-wrap gap-9 justify-start items-start py-1.5 pr-20 pl-16 mt-3.5 w-full bg-stone-100 min-w-[1200px] max-w-[1480px] mx-auto max-xl:min-w-0 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap flex-auto gap-10 justify-between items-center my-auto text-base leading-8 text-black max-md:max-w-full">
          <a href="#" className="self-stretch my-auto">
            ABOUT US
          </a>
          <a href="#" className="self-stretch my-auto">
            RESEARCH OPPORTUNITIES
          </a>
          <a href="#" className="self-stretch my-auto">
            HOW TO APPLY
          </a>
          <a href="#" className="self-stretch my-auto">
            SUCCESS STORIES
          </a>
          <a href="#" className="self-stretch my-auto">
            WORKSHOPS & MORE
          </a>
        </div>
        <div className="flex overflow-hidden flex-col justify-center items-start px-4 py-1.5 rounded-lg border border-rose-800 border-solid w-[174px] max-md:pr-5 mr-16">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e31eed3126b74eac8e8a0d2832bdf17684c36661?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
            alt="Search icon"
            className="object-contain w-8 aspect-square"
          />
        </div>
      </nav>
    </>
  );
};

export default Header;