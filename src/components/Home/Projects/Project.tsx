import { Button } from "@/components/ui/button";
import { CarouselItem } from "@/components/ui/carousel";
import { getColors } from "@/lib/utils";
import { Media, Project as ProjectT } from "@/payload-types";
import { IconBrandGithub, IconWorldWww } from "@tabler/icons-react";
import Image from "next/image";

type ProjectProps = {
  project: ProjectT;
};

const Project = ({ project }: ProjectProps) => {
  const image = project.image as Media;
  return (
    <CarouselItem className="relative">
      <div
        className="p-6 shadow-md flex flex-col justify-between items-start relative hover:scale-[1.02] transition-transform duration-300 ease-in-out"
        style={{ height: 320, aspectRatio: 1920 / 920 }}
      >
        <img
          src={image.url!}
          alt="project background"
          className="brightness-50 object-cover object-center w-full h-full absolute top-0 left-0 z-0"
        />
        <div className="z-10 flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center flex-wrap space-x-1">
              {project.categories.map((cat, i) => {
                const { bg, color } = getColors();
                return (
                  <Category
                    key={i}
                    text={cat.category!}
                    bg={bg}
                    color={color}
                  />
                );
              })}
            </div>
            <h2 className="text-white font-bold text-2xl">{project.title}</h2>
          </div>
          <div>
            <p className="mb-2 text-gray-200">{project.description}</p>
            <div className="flex items-center space-x-4">
              {project.github && (
                <Button className="flex items-center space-x-2 text-white">
                  <>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                    <IconWorldWww size={24} />
                  </>
                </Button>
              )}
              <Button className="flex items-center space-x-2 text-white">
                <>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>
                  <IconWorldWww size={24} />
                </>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CarouselItem>
  );
};
export default Project;

type CategoryProps = {
  text: string;
  bg: string;
  color: string;
};
const Category = ({ text, bg, color }: CategoryProps) => (
  <div
    className="py-1 px-2 m-1 text-[13px] rounded-sm font-medium  after:mix-blend-difference"
    style={{ backgroundColor: bg, color }}
  >
    {text}
  </div>
);
