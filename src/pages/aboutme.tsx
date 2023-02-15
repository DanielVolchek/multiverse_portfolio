import Layout from "@/components/layout";
import Projects from "@/components/projects";
import Head from "next/head";

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>
          <h1 className="text-6xl text-hunyadiyellow mt-6 ">Human Person</h1>
          <h2 className="text-4xl text-charcoal mt-6 ">About Me</h2>
          <p className="text-xl w-7/12 text-charcoal">
            I'm a (mostly) self taught developer living in NYC. I have a passion
            for all things tech, and I'm excited every day for all the
            possibilities. I started my career working as an Intern at Publicis
            Health, before moving to Clover as a Software Engineer Apprentice.
          </p>

          <h2></h2>
        </div>
      </Layout>
    </>
  );
}
