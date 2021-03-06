import tw from "tailwind-styled-components";
import ProjectCard from "./ProjectCard";
import { forwardRef } from "react";

const ProjectsContainer = tw.div`min-h-screen flex flex-col items-center`;
const ProjectsH1 = tw.h1`text-4xl border-b-4 pb-1 my-16 border-secondary`;
const ProjectCardsContainer = tw.div`grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-10`;

const Projects = forwardRef(({}, ref) => {
  return (
    <ProjectsContainer>
      <span ref={ref}></span>

      <ProjectsH1>My Projects</ProjectsH1>
      <ProjectCardsContainer>
        <ProjectCard
          name="Parea"
          desc="Full-stack Instagram clone with PWA capabilities."
          tags={[
            ["Next.js", "bg-gray-800"],
            ["NextAuth", "bg-gray-800"],
            ["MongoDB", "bg-green-600"],
            ["PWA", "bg-gray-800"],
            ["Tailwind", "bg-blue-500"],
          ]}
          img="/parea.png"
          gitLink="https://github.com/odysseaspapadimas/parea"
          webLink="https://parea.vercel.app/"
          left={true}
        />
        <ProjectCard
          name="Portfolio"
          desc="The website you're currently in, built from scratch."
          tags={[
            ["Next.js", "bg-gray-900"],
            ["Three.js", "bg-purple-800"],
          ]}
          img="/portfolio.png"
          gitLink="https://github.com/odysseaspapadimas/portfolio"
          webLink="https://odysseaspapadimas.vercel.app/"
        />
        <ProjectCard
          name="HaveBeen"
          desc="Full-stack travel journal in the form of a PWA."
          tags={[
            ["Next.js", "bg-gray-800"],
            ["MongoDB", "bg-green-600"],
            ["Firebase", "bg-yellow-400", "text-black"],
          ]}
          img="/havebeen.png"
          gitLink="https://github.com/odysseaspapadimas/havebeen"
          webLink="https://havebeen.vercel.app/"
          left={true}
        />
        <ProjectCard
          name="Poll Maker"
          desc="A simple full-stack web app to make and share polls."
          tags={[
            ["Next.js", "bg-gray-800"],
            ["MongoDB", "bg-green-600"],
          ]}
          img="/polls.png"
          gitLink="https://github.com/odysseaspapadimas/poll-maker"
          webLink="https://poll-maker.vercel.app/"
        />
        <ProjectCard
          name="Mastermind"
          desc="A simple clone of the popular game Mastermind."
          tags={[["React.js", "bg-blue-500"]]}
          img="/mastermind.png"
          gitLink="https://github.com/odysseaspapadimas/mastermind"
          webLink="https://mastermind-alpha.vercel.app/"
          left={true}
        />
      </ProjectCardsContainer>
    </ProjectsContainer>
  );
});

export default Projects;
