import { payload } from "@/lib/payload";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = async () => {
  const { docs: projects } = await payload.find({
    collection: "projects",
  });
  return (
    <div>
      <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">
        My Projects
      </h2>
      <ProjectsCarousel projects={projects} />
    </div>
  );
};
export default Projects;
