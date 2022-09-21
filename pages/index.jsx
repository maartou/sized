import Head from "next/head";
import Hero from "../components/hero/Hero";
import Franelas from "../components/franelas/Franelas";
import Gallery from "../components/gallery/Gallery";
import Testimonios from "../components/testimonios/Testimonios";
import Footer from "../components/footer/Footer";

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
        <Testimonios />
      </main>
      <Footer />
    </>
  );
}
