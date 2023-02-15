import Layout from "@/components/layout";
import Projects from "@/components/projects";
import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio|Volchek.Dev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <h1 className="text-5xl text-hunyadiyellow">Full Stack Dev</h1>
        <div className="pl-1">
          <h3 className="text-3xl">Are you really?</h3>
          <p className="w-[65vw] pl-4 ">
            Well, I will be. Right now I'm just a Software Engineer apprentice.
            The endgoal is to move up to eventually becoming a Senior Fullstack
            Engineer, with a priority on backend development (or at least
            non-design oriented frontend...)
          </p>
          <h3 className="text-3xl">Why Fullstack?</h3>
          <p className="w-[65vw] pl-4">
            Working as a Fullstack Engineer will allow me to work on and
            understand the intricacies of a modern day webapp from intuitive
            frontend design to efficient and scalable backend systems. That
            breadth of knowledge will improve my overall development skills and
            help me to become an invaluable member of any team I work on.
          </p>
        </div>
        <h3 className="text-5xl text-hunyadiyellow">Featured Projects</h3>
        <Projects />
      </Layout>
    </>
  );
}
