import React from "react";

interface NavigationItemProps {
  label: string;
  className?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ label, className = "" }) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      <span className="grow">{label}</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7436bb63613bfc2d4772fc3b319ae35696e717a?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
        alt="Dropdown arrow"
        className="object-contain shrink-0 my-auto self-start w-7 aspect-[0.97]"
      />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-start w-full bg-white shadow-[2px_4px_19px_rgba(217,217,217,0.25)]">
      <div className="flex pl-15 pr-5 pt-5 flex-wrap gap-5 justify-between items-end w-full max-md:max-w-full">
        <div className="flex gap-2 items-start">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/274b449f612f6dfeced69b10a8d5e6e3e04b8cdd?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
            alt="Konnifel Logo Icon"
            className="object-contain shrink-0 aspect-[0.97] w-[74px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/daa87278a7c26b2eb1f87a19d4e86ad5bca70ef6?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
            alt="Konnifel Logo Text"
            className="object-contain shrink-0 mt-3 max-w-full aspect-[2.56] w-[177px]"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-6xl mx-auto tracking-wider leading-none text-black max-md:text-4xl">
            KONNIFEL
          </h1>
          <p className="self-start mx-auto mt-2.5 text-lg font-light leading-snug text-neutral-950">
            A Dedicated Research Platform
          </p>
        </div>
        <nav className="flex gap-10 items-end self-stretch text-base font-medium leading-snug text-center whitespace-nowrap text-neutral-950">
          <div className="flex flex-col mt-7">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/381130b394cbcb0b2f3d1129c0fbd1c16143e772?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
              alt="Guide Icon"
              className="object-contain aspect-[1.71] w-[70px]"
            />
            <p className="self-center mt-2.5">Guide</p>
          </div>
          <div className="mt-7">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ccccc485d02d5817ec89cf2e3a632ee357225a6?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
              alt="Search Icon"
              className="object-contain w-10 aspect-square"
            />
            <p className="mt-2">Search</p>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cfbcf60d2ee6337098234e0de4bfa478f08d1715?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
            alt="Profile Icon"
            className="object-contain shrink-0 self-stretch max-w-full aspect-[1.14] w-[117px]"
          />
        </nav>
      </div>
      <nav className="flex pl-15 gap-15 flex-wrap mt-6 ml-5 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-20 my-auto text-lg font-bold tracking-wider leading-none text-center text-neutral-400 max-md:max-w-full">
          <button className="text-green-700 basis-auto">For Students</button>
          <button className="basis-auto">For professors & scholars</button>
          <button className="basis-auto">
            For Universities, Labs & Institutes
          </button>
        </div>
        <div className="flex flex-wrap gap-5 flex-auto text-2xl max-md:max-w-full">
          <div className="flex flex-col grow shrink-0 items-start my-auto leading-none text-rose-800 underline basis-50">
            <a
              href="#"
              className="flex gap-4 items-center max-w-full"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d41298595c58a9654ee727e50bbae55fb4d81e5?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
                alt="Download Icon"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <span className="self-stretch my-auto">
                Download the Konnifel App
              </span>
            </a>
          </div>
          <button className="overflow-hidden flex-auto gap-2.5 self-stretch px-10 py-6 leading-none text-white bg-rose-800 min-h-[67px] max-md:px-5">
            Register / Log in
          </button>
        </div>
      </nav>
      <nav className="flex w-full text-xl bg-[#E9F3EC] leading-loose text-black">
      <div className="flex overflow-hidden flex-wrap gap-5 justify-between items-start px-20 py-2.5 w-full max-md:px-5 max-md:max-w-full">
        <NavigationItem label="Explore Internships" />

        <NavigationItem
          label="About Konnifel"
          className="self-stretch my-auto"
        />

        <NavigationItem
          label="Konnifel Membership"
          className="gap-1"
        />

        <NavigationItem
          label="How to apply for internships"
          className="mt-1.5"
        />

        <NavigationItem
          label="Success Stories"
          className="mt-1.5"
        />
      </div>
    </nav>
    </header>
  );
};

export default Header;
