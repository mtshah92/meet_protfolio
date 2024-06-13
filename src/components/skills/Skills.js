import { skills } from "../../data/data";
import { Title } from "../common/Title";

export const Skills = () => {
  return (
    <div>
      {" "}
      <>
        <section
          id="skills"
          className="w-full py-20 border-b-[1px] border-b-gray-600"
        >
          <div className="flex flex-col">
            <div className="text-center">
              <Title desc="Skills" />
            </div>
            <div className="flex flex-col gap-10 px-2">
              <div className="flex flex-wrap justify-center gap-5">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skillIcon">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skillIcon">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};
