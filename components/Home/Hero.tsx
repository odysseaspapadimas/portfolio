import { Button, Group } from "@mantine/core"
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons"
import ExternalLink from "./ExternalLink"
import SocialLink from "./SocialLink"

/* eslint-disable react/no-unescaped-entities */
const Hero = () => {
    return (
        <div className="flex justify-center items-center my-4">
            <div className="flex flex-col max-w-sm">
                <h1 className="font-semibold">Odysseas Papadimas</h1>
                <h2 className="font-medium text-xl">Full-stack Web Developer</h2>

                <p>I'm currently working on my <ExternalLink href="https://thesis.odysseas.tech">Thesis</ExternalLink> and experimenting with the <ExternalLink href="https://github.com/t3-oss/create-t3-app">T3 Stack</ExternalLink> and Next.js 13!</p>

                <Group className="self-center mt-4">
                    <SocialLink href="https://github.com/odysseaspapadimas" Icon={<IconBrandGithub size={42} />} />
                    <SocialLink href="https://www.linkedin.com/in/odysseas-papadimas/" Icon={<IconBrandLinkedin size={42} />} />
                </Group>
            </div>
        </div>
    )
}


export default Hero