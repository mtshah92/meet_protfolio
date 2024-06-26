import { useState } from "react";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
import { navLinks, profiles, resumeLink } from "../../data/data";
import MSLogo from "../../assests/ms-logo-white-transparent.png";

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-4 md:px-10">
        <div className="h-100 w-100 cursor-pointer">
          <Link
            to={"about"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            onClick={() => setShowMenu(false)}
          >
            <img src={MSLogo} alt="Meet Shah" width={80} height={80} />
          </Link>
        </div>
        <div>
          <NavList
            extraClass={`hidden mdl:inline-flex items-center gap-6 lg:gap-10`}
            navItemtext="text-base"
            handleClick={() => setShowMenu(false)}
          />
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide mdl:hidden">
              <div className="flex flex-col gap-8 pt-2 cursor-pointer">
                <Link
                  to={"about"}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setShowMenu(false)}
                >
                  <img src={MSLogo} alt="Meet Shah" width={50} height={50} />
                </Link>
                <NavList
                  extraClass={`flex flex-col gap-4`}
                  navItemtext="text-base text-xl"
                  handleClick={() => setShowMenu(false)}
                />
                <div className="flex flex-col gap-4">
                  <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me at
                  </h2>
                  <div className="flex flex-grow gap-4 ">
                    {profiles.map((profile) => (
                      <span className="bannerIcon" key={profile.href}>
                        <a href={profile.href} target="_blank" rel="noreferrer">
                          {profile.icon}
                        </a>
                      </span>
                    ))}
                  </div>
                </div>
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-10 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const NavList = ({ extraClass, navItemtext, handleClick }) => {
  return (
    <ul className={extraClass}>
      {navLinks.map(({ _id, title, link }) => (
        <li
          key={_id}
          className={`${navItemtext} font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300`}
        >
          <Link
            to={link}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            onClick={() => handleClick()}
          >
            {title}
          </Link>
        </li>
      ))}
      <li className="border w-fit border-designColor rounded-md px-4 py-2">
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
        >
          Resume
        </a>
      </li>
    </ul>
  );
};
