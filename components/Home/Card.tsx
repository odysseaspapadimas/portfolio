import { ActionIcon, Button, Group, Paper, Text, Title, useMantineTheme } from "@mantine/core"
import { NextLink } from "@mantine/next";
import { IconBrandGithub, IconExternalLink, IconWorldWww } from "@tabler/icons"
import { Project } from "../../lib/types";

const image = "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"


{/* <Paper
shadow="md"
p="xl"
radius="md"
style={{ backgroundImage: `url(${image})` }}
className="h-[200px] flex flex-col justify-between items-start bg-cover bg-center"
> */}

const Card = ({ project }: { project: Project }) => {
    const theme = useMantineTheme();
    return (
        <div className=" p-3 shadow-md flex flex-col justify-between items-start relative hover:scale-105 transition-transform duration-200" style={{ height: 250, }}>
            <div className="absolute inset-0 rounded-md brightness-50 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
            <div className="z-10 flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center flex-wrap space-x-1">
                        {project.categories.map((category, i) => {
                            const { bg, color } = getColors();
                            return <Category key={i} text={category} bg={bg} color={color} />
                        })}

                    </div>
                    <h2 className="text-white font-bold text-2xl">
                        {project.title}
                    </h2>
                </div>
                <Group>
                    <Button rightIcon={<IconBrandGithub size={18} />}>
                        <a href={project.github} target="_blank" rel="noreferrer noopener">Github</a>
                    </Button>
                    <Button rightIcon={<IconWorldWww size={18} />}>
                        <a href={project.link} target="_blank" rel="noreferrer noopener">Link</a>
                    </Button>
                </Group>
            </div>
        </div >
    )
}
export default Card

type CategoryProps = {
    text: string;
    bg: string;
    color: string;
}
const Category = ({ text, bg, color }: CategoryProps) => (
    <div className="py-1 px-2 m-1 text-[13px] rounded-sm font-medium  after:mix-blend-difference" style={{ backgroundColor: bg, color }}>{text}</div>
)

const getColors = () => {
    const r = Math.floor((Math.random() * 256) - 1);
    const g = Math.floor((Math.random() * 256) - 1);
    const b = Math.floor((Math.random() * 256) - 1);
    // Calculate brightness of randomized colour
    const brightness = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    // Calculate brightness of white and black text
    const lightText = ((255 * 299) + (255 * 587) + (255 * 114)) / 1000;
    const darkText = ((0 * 299) + (0 * 587) + (0 * 114)) / 1000;

    const bg = "rgb(" + r + "," + g + "," + b + ")"
    let color;
    if (Math.abs(brightness - lightText) > Math.abs(brightness - darkText)) {
        color = "rgb(255, 255, 255)";
    } else {
        color = "rgb(0, 0, 0)";
    }

    return { bg, color };
}