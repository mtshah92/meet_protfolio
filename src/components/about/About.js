import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const About = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Problem Solver.", "React Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const profiles = [
    { href: "https://www.linkedin.com/in/mtshah98/", icon: <FaLinkedin /> },
    { href: "https://github.com/mtshah92", icon: <FaGithub /> },
    { href: "mailto:mthshah98@gmail.com", icon: <MdEmail /> },
  ];

  const skills = ["Javascript", "React", "Express", "Node", "MongoDB"];
  return (
    <>
      <section
        name="about"
        className="w-full pt-4 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-gray-600"
      >
        <div className="w-full flex flex-col gap-10 px-5 pt-5  p-6 xl:px-0">
          <div className="flex flex-col gap-5">
            <div className="text-5xl pb-8 text-white font-bold">
              <h1>
                Hi, I'm{" "}
                <span className="text-[#FF5733] capitalize">Meet Shah</span>
              </h1>
              <h2 className="h-[80px] md:h-auto text-4xl font-bold text-white">
                {" "}
                a <span>{text}</span>
                <Cursor
                  cursorBlinking={true}
                  cursorStyle="_"
                  cursorColor="#ff014f"
                />
              </h2>
            </div>
            <p className="text-base font-bodyFont leading-6 tracking-wide text-justify">
              I'm a Software Developer with a passion for creating innovative
              and functional web applications that make a difference in people's
              lives. My journey as a developer began when I discovered the power
              of technology to transform ideas into reality, and I've been
              hooked ever since. I'm a team player who thrives in collaborative
              environments and always eager to take on new challenges. I'm
              always seeking new opportunities to level up my skills and make
              the digital world a better place, one line of code at a time.
              <br />
              <br />
              What sets me apart from other developers is my multidisciplinary
              approach to problem-solving. With a background in design and a
              deep understanding of user experience, I'm able to create seamless
              and intuitive interfaces that engage users and keep them coming
              back for more. At the same time, I have a keen eye for detail and
              a strong understanding of the underlying technology, enabling me
              to build robust and scalable solutions that stand the test of
              time.
              <br />
              <br />I love working with business and collaborators to bring
              their ideas to life, and I'm always looking for new opportunities
              to learn and grow as a developer.
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between pt-0">
            <div className="flex-col">
              <h2 className="text-base uppercase font-titleFont mb-4">
                {" "}
                Find me
              </h2>
              <div className="flex flex-wrap gap-4">
                {profiles.map(({ href, icon }) => (
                  <a
                    key={href}
                    className="profile-icon"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex-col">
              <h3 className="text-gray-300 text-2xl pb-2">Best Skills</h3>
              <div className="flex flex-wrap gap-4">
                {skills.map((value, index) => (
                  <span key={index} className="skillIcon">
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
