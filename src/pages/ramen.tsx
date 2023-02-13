import Head from "next/head";
import MotionWrapper from "@/components/motion";

export default function Ramen() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MotionWrapper>
        <h1>Hi my name is Daniel Volchek</h1>
        <h3>I'm a...</h3>
      </MotionWrapper>
    </>
  );
}
