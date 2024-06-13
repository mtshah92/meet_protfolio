import { workExperience } from "../../data/data";
import { ExperienceCard } from "./ExperienceCard";
import { Title } from "../common/Title";

export const Experience = () => {
  const getExperience = () => {
    const today = new Date();
    const startDate = new Date(2021, 12, 20);
    const differenceInMilliSeconds = today.getTime() - startDate.getTime();
    const yearsOfExperience =
      differenceInMilliSeconds / (1000 * 60 * 60 * 24 * 365);
    return yearsOfExperience.toFixed(1);
  };
  return (
    <>
      <div
        name="experience"
        className="w-full py-20 border-b-[1px] border-b-gray-600"
      >
        <div className="flex justify-center items-center text-center">
          <Title
            title={`${getExperience()} years of Experience`}
            desc="Work Experience"
          />
        </div>
        <div className="pb=12 flex gap-20 px-5 ">
          <div className="mt-2 w-full h-fit border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
            {workExperience.map(
              ({ id, title, subTitle, location, description }) => {
                return (
                  <ExperienceCard
                    key={id}
                    title={title}
                    subTitle={subTitle}
                    location={location}
                    description={description}
                  />
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};
