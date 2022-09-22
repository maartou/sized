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
        <title>SIZED | Franelas oversize y estilo unico</title>
        <link rel="icon" href="/img/logo2.svg" />
        <meta
          name="description"
          content="Franelas y camisetas oversize con diseños únicos y originales; Entra a nuestra tienda, viste nuestras prendas y lleva el control de las tendencias. Estamos ubicados en Valencia edo. Carabobo - Venezuela."
        />
        <meta
          name="keywords"
          content="franelas, franelas oversize, sized, sized franelas, tienda de ropa, tienda de ropa oversize, tienda de ropa sized, tienda de ropa valencia, franelas oversize valencia, franelas oversize venezuela, tienda de ropa venezuela, franela oversize"
        />
        <meta
          property="og:title"
          content="SIZED | Franelas oversize y estilo unico"
        />
        <meta
          property="og:description"
          content="Franelas y camisetas oversize con diseños únicos y originales; Entra a nuestra tienda, viste nuestras prendas y lleva el control de las tendencias. Estamos ubicados en Valencia edo. Carabobo - Venezuela."
        />
        <meta property="og:site_name" content="SIZED" />

        <meta
          property="og:image"
          content="https://sized.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.85f1d6b0.jpg&w=2048&q=75"
        />

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
