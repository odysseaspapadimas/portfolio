/* eslint-disable @next/next/no-img-element */
import { CheckIcon, CopyButton, Group, Popover } from "@mantine/core"
import { IconCheck, IconCheckbox, IconClipboard, IconClipboardCheck, IconCopy, IconMail, IconSquareCheck } from "@tabler/icons"
import Head from "next/head"
import Image from "next/image"

/* eslint-disable react/no-unescaped-entities */
const About = () => {
    return (
        <>
            <Head>
                <title>About - Odysseas Papadimas</title>
            </Head>
            <div className="md:pt-8 pb-8">
                <div>
                    <h1 className="font-bold">About</h1>
                    <h1>Hi, I'm Odysseas 👋</h1>
                    <p className="">I'm a huge fan of Next.js and I love discovering and learning new technologies while working on fun and challenging projects.</p>
                    <br />
                    <p>Outside of Web Development I love watching all sorts of TV Shows and <span className="relative">Anime.<img src="/straw-hat.png" alt="Luffy's straw hat" width={25} height={25} className="absolute top-0 -right-[14px] rotate-45" /> </span></p>
                    <br />
                    <p>I also love learning new languages and I'm currently learning Spanish and Japanese.</p>
                </div>

                <div className="mt-8 flex flex-col md:flex-row justify-between md:space-x-8 space-y-8 md:space-y-0">
                    <div className="border border-slate-600 rounded-md p-6 flex-1">
                        <h2 className="text-2xl font-semibold">Skills</h2>
                        <div className="w-full h-[3px] bg-blue-500 mt-1"></div>
                        <div className="mt-4 grid grid-cols-2">
                            <p>Next.js</p>
                            <p>TypeScript</p>
                            <p>NextAuth</p>
                            <p>Tailwind</p>
                            <p>Mantine</p>
                            <p>MongoDB</p>
                            <p>Prisma ORM</p>
                            <p>MySQL</p>
                            <p>PostgreSQL</p>
                            <p>Git</p>
                        </div>
                    </div>

                    <div className="border border-slate-600 rounded-md p-6 flex-1">
                        <h2 className="text-2xl font-semibold">Availability</h2>
                        <div className="w-full h-[3px] bg-blue-500 mt-1"></div>

                        <Group spacing={6} className="mt-4">
                            <IconSquareCheck size={30} />
                            <p className="text-lg font-medium">Looking for intership</p>
                        </Group>
                        <p>In Patras, Greece or Remote</p>
                    </div>
                </div>

                <div className="border border-slate-600 rounded-md p-6 mt-8 flex-1">
                    <h2 className="text-2xl font-semibold">Contact</h2>
                    <div className="w-full h-[3px] bg-blue-500 mt-1"></div>

                    <Group spacing={6} className="mt-4">
                        <IconMail size={40} />
                        <CopyButton value="odysseas.patra@gmail.com">
                            {({ copied, copy }) => (
                                <div onClick={copy} className={`relative cursor-pointer flex space-x-2 border ${copied ? "border-green-500" : ""} rounded-md p-2`}>
                                    <p className="text-lg font-medium">odysseas.patra@gmail.com</p>
                                    {copied ? (
                                        <>
                                            <IconClipboardCheck />
                                            <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 py-2 px-4 rounded-md text-white">Copied</div>
                                        </>
                                    ) : (
                                        <IconClipboard />
                                    )}
                                </div>
                            )}
                        </CopyButton>
                    </Group>
                </div>
            </div>
        </>
    )
}
export default About