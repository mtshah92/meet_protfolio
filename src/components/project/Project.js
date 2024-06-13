import { projectData } from "../../data/data";
import { Title } from "../common/Title";
import { ProjectCard } from "./ProjectCard";

export const Project = () => {
  return (
    <>
      <section
        name="projects"
        className="w-full py-20  border-b-[1px] border-b-gray-600 px-4"
      >
        <div className="flex justify-center items-center text-center">
          <Title desc="My Projects" />
        </div>
        {projectData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
            {projectData.map(
              ({ id, title, des, src, websiteLink, githubLink }) => (
                <ProjectCard
                  id={id}
                  title={title}
                  des={des}
                  src={src}
                  websiteLink={websiteLink}
                  githubLink={githubLink}
                />
              )
            )}
          </div>
        ) : (
          <h3 className="text-lg text-designColor text-center">
            Projects will be added soon.
          </h3>
        )}
      </section>
    </>
  );
};
