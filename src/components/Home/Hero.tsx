import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import ExternalLink from "./ExternalLink";
import SocialLink from "./SocialLink";

const Hero = () => {
  return (
    <div className="flex w-full justify-center items-center mt-8 mb-4">
      <div className="flex flex-col w-full items-start max-w-sm">
        <div>
          <h1 className="font-semibold text-4xl">Odysseas Papadimas</h1>
          <h2 className="font-medium text-xl">Full-stack Developer</h2>
        </div>

        <p className="mt-4">
          I&apos;m a full-stack developer who loves discovering new technologies
          and building things.
        </p>

        <div className="flex items-center self-center mt-4">
          <SocialLink
            href="https://github.com/odysseaspapadimas"
            Icon={<IconBrandGithub size={42} />}
          />
          <SocialLink
            href="https://www.linkedin.com/in/odysseas-papadimas/"
            Icon={<IconBrandLinkedin size={42} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
