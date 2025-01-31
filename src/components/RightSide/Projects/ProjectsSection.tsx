import ProjectCard from "./ProjectCard";
import projects from "./Projects";
const ProjectsSection = () => {
  return (
    <section id="projects" className="mb-16 w-fulls">
      <h2 className="text-xl lg:hidden uppercase font-bold mb-4 text-custom-red">
        Projects
      </h2>
      <div className="flex justify-center items-center flex-col">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            images={project.images}
            githubLink={project.githubLink}
            deploymentLink={project.deploymentLink}
            skills={project.skills}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
