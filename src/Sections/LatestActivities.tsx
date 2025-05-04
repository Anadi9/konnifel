import React from "react";

const ActivityCard: React.FC<{
  text: string;
}> = ({ text }) => {
  return (
    <div className="flex overflow-hidden gap-7 items-end px-4 pb-4 w-full text-base tracking-normal bg-stone-100 min-h-24 max-md:max-w-full mt-4 first:mt-0">
      <p className="flex-1 shrink basis-0 text-neutral-950">
        {text}
      </p>
      <div className="flex gap-2 justify-center items-center text-rose-800">
        <span className="self-stretch my-auto">
          Know more
        </span>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a4b02c45f0031c6c223f490b8c8b27a3fc81a51?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
          alt="Arrow right"
          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[1.82]"
        />
      </div>
    </div>
  );
};

const LatestActivities: React.FC = () => {
  return (
    <section className="pr-2.5 pl-14 mt-20 -ml-px w-full max-w-[1480px] min-w-[1200px] mx-auto max-xl:min-w-0 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="mt-20 text-2xl leading-none text-neutral-950 max-md:mt-10">
        Latest Activities
      </h2>
      <div className="mt-6 w-full max-w-[1156px] min-w-[1156px] max-xl:min-w-0 max-md:max-w-full">
        <div className="flex gap-5 max-xl:gap-8 max-md:flex-col">
          <div className="w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 font-light leading-7 max-md:mt-10">
              <div className="grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <ActivityCard text="Institutes can now register their departments and professors on Konnifel." />
                <ActivityCard text="Applications for research internships in Mathematics now live." />
                <ActivityCard text="High schooler research internship program is launching soon." />
              </div>
              <div className="flex shrink-0 self-start w-0.5 bg-zinc-300 h-[214px]" />
            </div>
          </div>
          <div className="ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <div className="text-lg tracking-normal leading-6 max-md:max-w-full">
                <p className="text-neutral-950 max-md:max-w-full">
                  <span className="font-light">
                    &quot;A dedicated research platform connecting{" "}
                  </span>
                  <span className="font-bold text-[rgba(10,10,10,1)]">
                    undergraduate, graduate, post-graduate students and
                    aspiring researchers
                  </span>
                  <span className="font-light"> and </span>
                  <span className="font-bold text-[rgba(166,16,43,1)]">
                    high - schoolers
                  </span>
                  <span className="font-light">
                    {" "}
                    with professors and universities, for research
                    internships, assistantships, fellowships, and other
                    opportunities.&quot;
                  </span>
                </p>
                <p className="mt-5 font-light text-neutral-950 max-md:max-w-full">
                  Konnifel is headquartered in New Delhi, India, but our reach
                  knows no borders. We are a global research internship
                  platform that connects students, universities, and
                  institutions across continents.
                </p>
              </div>
              <button className="overflow-hidden gap-2.5 self-start px-8 py-2.5 mt-7 text-xl text-rose-800 bg-white border-2 border-rose-800 border-solid min-h-[50px] max-md:px-5">
                Know more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestActivities;