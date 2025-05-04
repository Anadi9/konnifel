import React from "react";

const FooterBanner: React.FC = () => {
  return (
    <footer className="flex flex-wrap gap-5 justify-between px-20 py-16 mt-20 w-full bg-neutral-800 max-w-[1480px] min-w-[1200px] mx-auto max-xl:min-w-0 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="pl-px my-auto text-4xl leading-10 text-white w-[409px]">
        Your research passion, supported by Konnifel{" "}
      </h2>
      <div className="flex gap-4 justify-center items-end">
        <div className="flex flex-col w-[187px]">
          <span className="self-start text-base font-light leading-none text-center text-zinc-300">
            Live Tracking
          </span>
          <div className="flex gap-3 items-center mt-2 w-full text-6xl leading-none text-white whitespace-nowrap max-md:text-4xl">
            <div className="flex shrink-0 self-stretch my-auto w-2 h-2 bg-green-500 rounded-[999px]" />
            <span className="self-stretch my-auto max-md:text-4xl">
              41,545
            </span>
          </div>
        </div>
        <p className="w-44 text-lg font-light leading-6 text-white">
          Candidates joined Konnifel so far
        </p>
      </div>
    </footer>
  );
};

export default FooterBanner;