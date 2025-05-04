import React from "react";

interface StatItemProps {
  number: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label }) => {
  return (
    <div className="flex flex-col items-center self-stretch my-auto text-center min-w-60">
      <h3 className="text-5xl font-medium tracking-tighter max-md:text-4xl">
        {number}
      </h3>
      <p className="text-2xl tracking-widest">
        {label}
      </p>
    </div>
  );
};

const StatisticsDivider: React.FC = () => {
  return (
    <div className="shrink-0 self-stretch my-auto w-0 border border-rose-800 border-solid h-[131px]" />
  );
};

const StatisticsSection: React.FC = () => {
  return (
    <section className="pr-2.5 pl-14 -ml-px w-full max-w-[1480px] min-w-[1200px] mx-auto max-xl:min-w-0 max-md:pl-5 max-md:max-w-full">
      <div className="flex flex-row justify-between mt-20 w-full bg-white max-w-[1156px] min-w-[1156px] max-xl:min-w-0 text-stone-900 max-md:mt-10 max-md:max-w-full">
        <StatItem number="224" label="Research Opportunities" />
        <StatisticsDivider />
        <StatItem number="140" label="Onboarded Professors" />
        <StatisticsDivider />
        <StatItem number="655" label="Institutes" />
      </div>
    </section>
  );
};

export default StatisticsSection;