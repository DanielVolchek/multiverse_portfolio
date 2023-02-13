import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";
import me from "@/images/stock.jpeg";
import Redirect from "@/components/redirect";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex">
          <Intro />
        </div>
        <Redirect />
      </Layout>
    </>
  );
}

const Intro = () => {
  return (
    <section className="text-charcoal">
      <Image
        src={me}
        alt="Picture of me"
        className="rounded-full float-right w-1/4"
      />
      <h1 className="text-4xl mb-1">Hey There👋 My name is Daniel Volchek.</h1>
      <p className="text-xl">
        Welcome to my portfolio website, built for{" "}
        <Link
          className="text-lapizlazuli underline hover:text-charcoal"
          href={"https://multiverse.io"}
        >
          Multiverse
        </Link>
        !
      </p>
    </section>
  );
};
