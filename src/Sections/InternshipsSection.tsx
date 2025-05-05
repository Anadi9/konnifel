import * as React from "react";
import {
  CustomInputFieldProps,
  FilterOptionProps,
  InternshipCardProps,
} from "../types/Internships";
import { internshipData } from "../mocks/InternshipData";

const CustomInputField: React.FC<CustomInputFieldProps> = ({
  label,
  placeholder,
  counter,
  iconSrc,
}) => {
  return (
    <div className="self-start">
      <div className="flex items-end w-full text-sm bg-white max-w-[343px] min-h-4 text-zinc-900">
        <div className="flex shrink-0 w-3 h-2 rounded-lg border-t border-l border-zinc-900" />
        <div className="gap-2 px-1">{label}</div>
        <div className="flex flex-1 shrink h-2 rounded-none border-t border-r basis-0 border-zinc-900 w-[232px]" />
      </div>
      <div className="flex gap-2 items-start pt-1.5 pr-3 pb-3.5 pl-4 w-full text-base bg-white border-r border-b border-l border-zinc-900 max-w-[343px] text-zinc-500">
        <div className="flex shrink-0 w-6 h-6" />
        <div className="flex flex-1 shrink gap-2 items-center self-stretch py-1 h-full basis-0 min-w-60">
          <div className="flex-1 shrink self-stretch my-auto basis-0 text-zinc-500">
            {placeholder}
          </div>
          {counter && (
            <div className="self-stretch my-auto text-right text-neutral-500">
              {counter}
            </div>
          )}
        </div>
        <img
          src={iconSrc}
          alt="Input icon"
          className="object-contain shrink-0 w-6 aspect-square"
        />
      </div>
    </div>
  );
};

const FilterOption: React.FC<FilterOptionProps> = ({ text }) => {
  return (
    <button className="grow shrink basis-auto text-base leading-none text-neutral-700">
      {text}
    </button>
  );
};

const InternshipCard: React.FC<InternshipCardProps> = ({
  title,
  field,
  researchArea,
  institute,
  internUnder,
  lastDateToApply,
  isActive,
  isHighlighted = false,
}) => {
  return (
    <article
      className={`flex overflow-hidden flex-col items-start py-3 pr-1 pl-3.5 w-full shadow-sm bg-white h-full`}
    >
      <h3 className="text-xl leading-7 text-gray-900">{title}</h3>
      <div className="mt-5 text-sm leading-none text-stone-500">
        <strong>Field: </strong>
        {field}
      </div>
      <div className="self-stretch mt-2.5 text-sm leading-none text-stone-500">
        <strong>Research Area</strong>: {researchArea}
      </div>
      <div className="self-stretch mt-8 text-sm leading-5 text-stone-500">
        <strong>Institute:</strong>
        <span className="text-black">{institute}</span>
      </div>
      <div className="mt-2.5 text-sm leading-5 text-stone-500">
        <strong>Intern Under</strong>: {internUnder}
      </div>
      <div className="flex gap-10 mt-7 w-full">
        <div className="text-xs leading-4 text-stone-500">
          <strong>Last date to apply</strong>
          <br />
          {lastDateToApply}
        </div>
        <div className="flex flex-col justify-center items-center self-start px-5 py-3 text-xs font-bold leading-none text-center text-green-700 whitespace-nowrap">
          <div className="gap-2 self-stretch max-w-full w-[100px]">
            {isActive ? "Active" : "Inactive"}
          </div>
        </div>
      </div>
    </article>
  );
};

const InternshipGrid: React.FC = () => {
  // Split the data into two rows of 4 cards each
  const firstRowCards = internshipData.slice(0, 4);
  const secondRowCards = internshipData.slice(4, 8);

  return (
    <section className="px-30 mb-20">
      <div className="mt-20 max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
        <div className="flex max-md:flex-col">
          {firstRowCards.map((internship, index) => (
            <div
              key={internship.id}
              className={`w-3/12 max-md:ml-0 max-md:w-full ${
                index > 0 ? "ml-5" : ""
              }`}
            >
              <div className="mx-auto w-full max-md:mt-4">
                <InternshipCard
                  title={internship.title}
                  field={internship.field}
                  researchArea={internship.researchArea}
                  institute={internship.institute}
                  internUnder={internship.internUnder}
                  lastDateToApply={internship.lastDateToApply}
                  isActive={internship.isActive}
                  isHighlighted={internship.isHighlighted}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex max-md:flex-col">
          {secondRowCards.map((internship, index) => (
            <div
              key={internship.id}
              className={`w-3/12 max-md:ml-0 max-md:w-full ${
                index > 0 ? "ml-5" : ""
              }`}
            >
              <div className="mx-auto w-full max-md:mt-4">
                <InternshipCard
                  title={internship.title}
                  field={internship.field}
                  researchArea={internship.researchArea}
                  institute={internship.institute}
                  internUnder={internship.internUnder}
                  lastDateToApply={internship.lastDateToApply}
                  isActive={internship.isActive}
                  isHighlighted={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function InternshipsSection() {
  return (
    <main>
      <section className="flex flex-col mt-20 px-30 mx-auto items-start w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between self-stretch w-full max-md:max-w-full">
          <div className="flex gap-5 items-center">
            <CustomInputField
              label="Education Level"
              placeholder="Choose your education level"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/f5ed7eb7bb08635a2acf10c69c038142b119cf50?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
            />
            <CustomInputField
              label="Subjects"
              placeholder="Choose your field"
              counter="0/12"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/57e9760621f21bdf5ce9e88b816235ba98f85bd5?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
            />
            <div className="flex items-center gap-2">
              <div className="flex shrink-0 my-auto rounded-full border border-black border-solid bg-zinc-50 h-[30px] w-[30px]" />
              <h3 className="my-auto text-xl leading-relaxed basis-auto text-zinc-900">
                View Virtual/Online Internships
              </h3>
            </div>
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bce52c3f1a347b512896766145ff1ed082fab17?placeholderIfAbsent=true&apiKey=16a5c3476d8b40d98f119ff25c9d6a65"
            alt="Logo"
            className="object-contain shrink-0 my-auto aspect-[2.18] w-[72px]"
          />
        </div>

        <div className="flex flex-wrap gap-10 mt-10 ml-6 max-w-full text-base leading-none text-neutral-700 w-[532px] max-md:mt-10">
          <FilterOption text="Undergraduate" />
          <FilterOption text="Postgraduate" />
          <FilterOption text="CSE, AI & Data Science" />
        </div>

        <p className="mt-9 text-xl font-light leading-relaxed text-zinc-900 max-md:max-w-full">
          Professor names and contact details will be visible to shortlisted
          candidates for their respective applied internships. This is to
          prevent mail spam to professors.
        </p>
      </section>

      <InternshipGrid />
    </main>
  );
}

export default InternshipsSection;
