import Head from 'next/head'
import Hero from '../components/Home/Hero';
import Projects from '../components/Home/Projects';
import { createClient } from "next-sanity";
import { Project } from '../lib/types';
import sanity from '../lib/sanity';

type Props = {
  projects: Project[];
}

export default function Home({ projects } : Props) {

  console.log(projects, 'projects')
  return (
    <>
      <Head>
        <title>Odysseas Papadimas - Full-stack Web Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="I am a Web Developer, ready for hire. Check out my portfolio."
        />
        <meta name="keywords" content="odysseas papadimas, portfolio, web developer, react, nextjs" />
      </Head>

      <main>
        <Hero />
        <Projects projects={projects} />
      </main>
    </>
  )
}


export async function getStaticProps() {
  const projects = await sanity.fetch(`*[_type == "project"] | order(_createdAt asc) {_id, title, github, link, "image":image.asset->url, categories}`);

  return {
    props: {
      projects
    },
  }
}
