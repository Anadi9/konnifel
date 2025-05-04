import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="pr-2.5 pl-14 mt-20 -ml-px w-full max-w-[1480px] min-w-[1200px] mx-auto max-xl:min-w-0 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <div className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:ml-0 max-md:w-full">
            <div className="w-full max-md:mt-3 max-md:max-w-full">
              <div className="max-md:max-w-full">
                <h1 className="font-(family-name: Libre Baskerville, serif) text-6xl tracking-tighter leading-[74px] text-neutral-950 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                  Intern with the <br/>Professors
                </h1>
                <p className="mt-6 text-lg font-light tracking-normal leading-7 text-neutral-950 max-md:max-w-full">
                  Our mission is simple: bridge global talent with meaningful,
                  impactful research, no matter the geography.Konnifel opens
                  doors to world-class research opportunities—wherever you
                  are.
                </p>
              </div>
              <div className="flex flex-row gap-10 justify-between mt-16 w-full text-xl text-rose-800 max-xl:flex-wrap max-md:mt-10 max-md:mr-1 max-md:max-w-full">
                <button className="overflow-hidden gap-2.5 self-stretch px-7 py-2.5 bg-white border-2 border-rose-800 border-solid min-h-[50px] min-w-60 w-[285px] max-md:px-5">
                  Find an opportunity
                </button>
                <button className="overflow-hidden gap-2.5 self-stretch py-2.5 pr-7 pl-7 ml-2.5 bg-white border-2 border-rose-800 border-solid min-h-[50px] min-w-60 w-[282px] max-md:px-5">
                  Post an opportunity
                </button>
              </div>
            </div>
          </div>
          <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3463e31171047f1bde07f925ee4250b659e211a?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
              alt="Research internship illustration"
              className="object-contain grow w-full aspect-[1.64] max-md:mt-3 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;