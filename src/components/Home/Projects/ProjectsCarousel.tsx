import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Project from "./Project";
import { Media, Project as ProjectT } from "@/payload-types";

type ProjectsCarouselProps = {
  projects: ProjectT[];
};
const ProjectsCarousel = ({ projects }: ProjectsCarouselProps) => {
  return (
    <Carousel>
      <CarouselContent>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default ProjectsCarousel;
