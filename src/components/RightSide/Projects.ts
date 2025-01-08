import project1Image from "../../assets/imgs/project1Image.png";
import project1Image2 from "../../assets/imgs/project1Image2.png";
import project1Image3 from "../../assets/imgs/project1Image3.png";
import project1Image4 from "../../assets/imgs/project1Image4.png";
import project1Image5 from "../../assets/imgs/project1Image5.png";
import project1Image6 from "../../assets/imgs/project1Image6.png";
import project1Image7 from "../../assets/imgs/project1Image7.png";
import project1Image8 from "../../assets/imgs/project1Image8.png";
import project1Image9 from "../../assets/imgs/project1Image9.png";

import project2Image from "../../assets/imgs/project2Image.png";
import project2Image2 from "../../assets/imgs/project2Image2.png";
import project2Image3 from "../../assets/imgs/project2Image3.png";
import project2Image4 from "../../assets/imgs/project2Image4.png";
import project2Image5 from "../../assets/imgs/project2Image5.png";
import project2Image6 from "../../assets/imgs/project2Image6.png";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  githubLink: string;
  deploymentLink: string;
  skills: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Book Store",
    description: "Functional e-commerce app for books with an admin dashboard.",
    images: [
      project1Image,
      project1Image2,
      project1Image3,
      project1Image4,
      project1Image5,
      project1Image6,
      project1Image7,
      project1Image8,
      project1Image9,
    ],
    githubLink: "https://github.com/AbdelrahmanNasser00/Book-Store",
    deploymentLink: "",
    skills: [
      "React",
      "Redux Toolkit",
      "RTK Query",
      "Tailwind CSS",
      "Material UI",
      "Express.js",
      "MongoDB",
      "Node.js",
      "JWT",
    ],
  },
  {
    id: 2,
    title: "Realtime Lecturing",
    description:
      "Built a real-time lecturing app similar to Microsoft Teams with scheduling and notifications.",
    images: [
      project2Image,
      project2Image2,
      project2Image3,
      project2Image4,
      project2Image5,
      project2Image6,
    ],
    githubLink: "https://github.com/AbdelrahmanNasser00/project-2",
    deploymentLink: "https://project-2.netlify.app",
    skills: [
      "React",
      "Redux",
      "Material UI",
      "Express.js",
      "MongoDB",
      "Node.js",
      "JWT",
      "Socket.io",
      "WebRTC",
      "Peer2Peer",
    ],
  },
  //   {
  //     id: 3,
  //     title: "Project 3",
  //     description: "This is a description of project 3",
  //     images: [project1Image, project1Image, project1Image],
  //     githubLink: "https://github.com/AbdelrahmanNasser00/project-3",
  //     deploymentLink: "https://project-3.netlify.app",
  //     skills: ["React", "TypeScript", "Material-UI"],
  //   },
];

export default projects;
