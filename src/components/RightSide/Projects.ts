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

import project3Image from "../../assets/imgs/project3Image.png";

import project4Image from "../../assets/imgs/project4Image.png";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  githubLink: string;
  deploymentLink: string;
  skills: string[];
}
console.log(project1Image, project1Image2, project1Image3);

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
    deploymentLink: "https://gitbookeg.netlify.app/",
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
      "axios",
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
    githubLink:
      "https://github.com/AbdelrahmanNasser00/Realtime-Lecturing-client",
    deploymentLink: "https://realtime-lecturing.netlify.app/",
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
      "axios",
      "sweetalert2",
    ],
  },
  {
    id: 3,
    title: "Chatting Website",
    description: "Developed a multi-user chat platform.",
    images: [project3Image],
    githubLink: "https://github.com/AbdelrahmanNasser00/ChatApp",
    deploymentLink: "https://chat-app-3tcu.onrender.com/",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Socket.io"],
  },
  {
    id: 4,
    title: "Simple TO-DO",
    description: "",
    images: [project4Image],
    githubLink: "https://github.com/AbdelrahmanNasser00/ToDoList",
    deploymentLink: "https://letsdoiteg.netlify.app/",
    skills: ["React", "Redux", "Material UI"],
  },
];

export default projects;
