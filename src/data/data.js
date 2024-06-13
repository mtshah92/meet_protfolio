import mebook from "../assests/mebook.png";
import custofriend from "../assests/custofriend.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const navLinks = [
  {
    _id: 1001,
    title: "About",
    link: "about",
  },
  {
    _id: 1002,
    title: "Experience",
    link: "experience",
  },
  {
    _id: 1003,
    title: "Skills",
    link: "skills",
  },
  {
    _id: 1004,
    title: "Projects",
    link: "projects",
  },
  {
    _id: 1005,
    title: "Contact",
    link: "contact",
  },
];

export const resumeLink =
  "https://drive.google.com/file/d/1OuKPX-mN4-dUdijDddE47M5tJaduw_YJ/view";

export const profiles = [
  {
    href: "https://www.linkedin.com/in/mtshah98/",
    icon: <FaLinkedinIn />,
  },

  {
    href: "https://github.com/mtshah92",
    icon: <FaGithub />,
  },
  {
    href: "mailto:mthshah98@gmail.com",
    icon: <MdEmail />,
  },
];
export const workExperience = [
  {
    id: 1,
    title: "Software Engineer",
    subTitle: "Wipro - (12/2021-Present)",
    location: "Pune, India",
    description: [
      "Developed an app from scratch and designed templates according to wireframes and implemented authentication and authorization mechanisms using JWT tokens and OAuth protocols.",
      "Implemented Azure CI/CD pipelines for deployment, reducing software release times by 50%.",
      "Created RESTful APIs to handle server-side logic and interact with the MongoDB database and integrated Azure Blob Storage for file download and upload functionality.",
      "Actively participated in team collaboration, engaging in regular discussions and code reviews",
      "Recognized for significant contributions to the project's success.",
    ],
  },
];

export const skills = {
  frontend: ["React", "Redux", "Javascript", "HTML", "CSS"],
  backend: ["MongoDB", "Node", "Express"],
};

export const projectData = [
  {
    id: 1,
    title: "MeBook",
    des: "Mebook- a Social Media App to share your thinking,follow people around the globe,connect with your friends.",
    src: mebook,
    websiteLink: "https://mebook-social-media.netlify.app/",
    githubLink: "https://github.com/mtshah92/social-media",
  },
  {
    id: 2,
    title: "CustoFriend",
    des: "Mebook- a Social Media App to share your thinking,follow people around the globe,connect with your friends.",
    src: custofriend,
    websiteLink: "https://custofriend.netlify.app/",
    githubLink: "https://github.com/mtshah92/ecommerce",
  },
  {
    id: 3,
    title: "CustoFriend",
    des: "Mebook- a Social Media App to share your thinking,follow people around the globe,connect with your friends.",
    src: custofriend,
    websiteLink: "https://custofriend.netlify.app/",
    githubLink: "https://github.com/mtshah92/ecommerce",
  },
];
