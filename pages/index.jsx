import Head from "next/head";
import Hero from "../components/hero/Hero";
import Franelas from "../components/franelas/Franelas";
import Gallery from "../components/gallery/Gallery";

export default function Home() {
  return (
    <>
      <Head>
        <title>SIZED</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Franelas />
        <Gallery />
      </main>
    </>
  );
}
