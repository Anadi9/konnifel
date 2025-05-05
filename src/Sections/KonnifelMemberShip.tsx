import React from "react";
import { InternshipUpdatesProps, KonnifelMembershipProps, MembershipInfoProps, UpdateItemProps } from "../types/Internships";

const UpdateItem: React.FC<UpdateItemProps> = ({ icon, text }) => {
  return (
    <>
      <div className="flex gap-4 items-center">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html: icon,
            }}
          />
        </div>
        <p className="text-sm leading-loose underline text-neutral-950 max-sm:text-xs">
          {text}
        </p>
      </div>
      <div className="mx-0 my-3.5 w-full h-0.5 bg-stone-300" />
    </>
  );
};

const MembershipInfo: React.FC<MembershipInfoProps> = ({ title, subtitle, description }) => {
  return (
    <section className="left-[section] w-[778px] max-md:w-full">
      <h2 className="text-4xl leading-relaxed underline text-zinc-900 max-sm:text-3xl">
        <span className="text-rose-800">
          <u>{title}</u>
        </span>
        <span>
          {subtitle}
        </span>
      </h2>
      <div className="mx-0 my-3.5 w-full h-0.5 bg-stone-300" />
      <p className="text-2xl leading-relaxed text-zinc-900 max-sm:text-xl">
        {description}
      </p>
    </section>
  );
};

const InternshipUpdates: React.FC<InternshipUpdatesProps> = ({ title, updates }) => {
  return (
    <section className="right-[section] w-[574px] max-md:w-full">
      <h3 className="mb-7 w-80 text-xl leading-loose text-neutral-950 text-opacity-80 max-md:mb-4 max-sm:text-base" style={{ whiteSpaceCollapse: "preserve" }}>
        {title}
      </h3>
      <div className="flex flex-col gap-4">
        {updates.map((update, index) => (
          <UpdateItem
            key={index}
            icon={update.icon}
            text={update.text}
          />
        ))}
      </div>
    </section>
  );
};

const KonnifelMembership: React.FC<KonnifelMembershipProps> = ({ membershipInfo, internshipUpdates }) => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400&family=Poppins:wght@300;400&family=Roboto:wght@300;400&display=swap"
      />
      <main className="flex flex-row justify-between mt-20 p-5 mx-auto my-0 w-full bg-white max-w-[1506px] max-md:flex-col max-md:items-center max-md:p-4 max-md:max-w-[991px] max-sm:p-3 max-sm:max-w-screen-sm">
        <MembershipInfo
          title={membershipInfo.title}
          subtitle={membershipInfo.subtitle}
          description={membershipInfo.description}
        />
        <InternshipUpdates
          title={internshipUpdates.title}
          updates={internshipUpdates.updates}
        />
      </main>
    </>
  );
};

export default KonnifelMembership;