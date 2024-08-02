/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline";
import { IconMail, IconSquareCheck } from "@tabler/icons-react";

import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About - Odysseas Papadimas</title>
      </Head>
      <div className="md:pt-8 pb-8">
        <div>
          <h2 className="text-2xl font-semibold">Hi, I'm Odysseas 👋</h2>
          <p className="">
            I'm a huge fan of Next.js and I love discovering and learning new
            technologies while working on fun and challenging projects.
          </p>
          <br />
          <p>
            Outside of Web Development I love watching all sorts of TV Shows and{" "}
            <span className="relative">
              Anime.
              <img
                src="/straw-hat.webp"
                alt="Luffy's straw hat"
                width={25}
                height={25}
                className="absolute top-0 -right-[14px] rotate-45"
              />{" "}
            </span>
          </p>
          <br />
          <p>
            I also love learning new languages and I'm currently learning
            Spanish and Japanese.
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between md:space-x-8 space-y-8 md:space-y-0">
          <div className="border border-slate-600 rounded-md p-6 flex-1">
            <h2 className="text-2xl font-semibold">Skills</h2>
            <div className="w-full h-[3px] bg-blue-500 mt-1"></div>
            <div className="mt-4 grid grid-cols-3">
              <p>Next.js</p>
              <p>React Native</p>
              <p>TypeScript</p>
              <p>NextAuth</p>
              <p>Tailwind</p>
              <p>Mantine</p>
              <p>Shadcn/ui</p>
              <p>Prisma ORM</p>
              <p>Drizzle</p>
              <p>MySQL</p>
              <p>PostgreSQL</p>
              <p>Git</p>
            </div>
          </div>
        </div>

        <div className="border border-slate-600 rounded-md p-6 mt-8 flex-1">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <div className="w-full h-[3px] bg-blue-500 mt-1"></div>

          <div className="mt-4 flex items-center space-x-2">
            <IconMail size={30} />
            <a
              className="text-base font-medium hover:text-primary"
              href="mailto:odysseas.patra@gmail.com"
            >
              odysseas.papadimas9@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
          <Timeline>
            <TimelineItem status="default">
              <TimelineHeading>
                <span className="text-xl">Evline</span>{" "}
                <span className="text-gray-300 text-base lowercase">
                  - Front-end Developer {" "}
                </span>
                <span className="text-gray-400 text-sm">
                  [ 15/12/2023 – Current ]
                </span>
              </TimelineHeading>
              <TimelineDot status="custom" />
              <TimelineLine done />
              <TimelineContent>
                • Developing web and mobile applications within team settings,
                contributing to full project lifecycle. <br />• Adapted quickly
                to take over ongoing projects from previous developers, ensuring
                smooth transitions
              </TimelineContent>
            </TimelineItem>
            <TimelineItem status="done">
              <TimelineHeading>
                <span className="text-xl">Pop2See</span>{" "}
                <span className="text-gray-300 text-base lowercase">
                  - Full-stack Developer {" "}
                </span>
                <span className="text-gray-400 text-sm">
                  [ 12/06/2023 – Current ]
                </span>
              </TimelineHeading>
              <TimelineDot status="custom" />
              <TimelineContent>
                A 6-month internship where I developed an AI web app to assist
                blind and visually impaired individuals. I continue to volunteer
                with Pop2See, contributing to their mission.
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </>
  );
};
export default About;
