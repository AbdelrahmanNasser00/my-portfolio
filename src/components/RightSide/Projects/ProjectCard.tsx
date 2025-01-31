import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import ProjectDeployment from "./ProjectDeployment";
import ProjectGithub from "./ProjectGithub";

interface cardProps {
  title: string;
  description: string;
  images: string[];
  githubLink: string;
  deploymentLink: string;
  skills: string[];
}
const ProjectCard: React.FC<cardProps> = ({
  title,
  description,
  images,
  githubLink,
  deploymentLink,
  skills,
}) => {
  return (
    <div className="w-full border border-color-content-outline border-radius rounded-lg mb-5">
      <Carousel>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="rounded-t-lg"
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-1 shadow-2xl" />
        <CarouselNext className="right-1 shadow-2xl" />
      </Carousel>
      <div className="p-5">
        <h2 className="text-xl font-semibold text-secondary">{title}</h2>
        <p>{description}</p>
        <div className="mt-2 flex">
          <ProjectGithub githubLink={githubLink} />
          {deploymentLink !== "" && (
            <ProjectDeployment deploymentLink={deploymentLink} />
          )}
        </div>
        <div>
          <ul className="flex flex-wrap mt-3">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="mr-2 mt-1 text-[0.65rem] font-fontFamilyMono bg-color-gray sm:text-xs p-1 rounded-md ">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
