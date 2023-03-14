import Section from "./../components/Section";
import { SectionContainerV } from "./../components/SectionContainer";
import ProjectItem from "./ProjectItem";

type ProjectsItemType = {
  id: string;
  name: string;
  description: string;
  repoUrl: string;
  liveUrl: string;
};

const Projects = ({ Projects, MainColor }: any) => {
  const latestProjects = [...Projects].reverse().slice(0, 3);
  return (
    <Section MainColor={MainColor} Title="PROJETS">
      <SectionContainerV>
        {latestProjects.map((proj: ProjectsItemType, index: number) => {
          return (
            <ProjectItem
              key={index}
              name={proj.name}
              description={proj.description}
              repoUrl={proj.repoUrl}
              liveUrl={proj.liveUrl}
            />
          );
        })}
      </SectionContainerV>
    </Section>
  );
};

export default Projects;