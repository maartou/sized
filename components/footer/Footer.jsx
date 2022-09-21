import style from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../../public/img/logo2.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.foto}>
          <Image src={logo2} alt="sized logo" />
        </div>

        <nav className={style.links}>
          <Link href="/"> Inicio </Link>
          <Link href="#modelos"> Modelos </Link>
          <Link href="#gallery"> Galería </Link>
        </nav>

        <div className={style.copy}>
          <p> &copy; Sized clothing 2022 todos los derechos reservados. </p>
        </div>

        <p>
          Sitio web realizado por <a href="https://www.martineduardo.com/" target="_blank" rel="noreferrer" className={style.anchor}>Martin Padrón</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
