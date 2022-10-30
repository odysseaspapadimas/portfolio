import { Carousel } from "@mantine/carousel"
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Project } from "../../lib/types";
import Card from "./Card"

type Props = {
    projects: Project[];
}

const Projects = ({ projects }: Props) => {
    const theme = useMantineTheme();

    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`, true, { getInitialValueInEffect: true });

    return (
        <div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-white">My Projects</h2>
            <Carousel
                slideSize="50%"
                breakpoints={[{ maxWidth: 'xs', slideSize: '100%', slideGap: 2 }]}
                slideGap="xl"
                slidesToScroll={mobile ? 1 : 2}
                withIndicators
                styles={{
                    indicators: {
                        bottom: -16
                    },
                    indicator: {
                        width: 12,
                        height: 4,
                        transition: 'width 250ms ease',

                        '&[data-active]': {
                            width: 40,
                        },
                    },
                    control: {
                        backgroundColor: "white !important"
                    }
                }}
            >

                {projects.map((project) => (
                    <Carousel.Slide key={project._id}>
                        <Card project={project} />
                    </Carousel.Slide>
                ))}
            </Carousel>
        </div>
    )
}
export default Projects