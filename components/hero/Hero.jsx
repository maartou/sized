import style from "./Hero.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/logo.jpg";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Hero = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.foto}>
          <Image src={logo} alt="sized logo" priority />
        </div>

        <h1>Compra franelas oversize en Valencia Venezuela | SIZED STORE</h1>

        <div className={style.btn}>
          <Link href="#gallery">Ver catálogo</Link>
        </div>

        <div className={style.socials}>
          <a
            href="https://www.instagram.com/sized_clothing.ms/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <AiOutlineInstagram className={style.icon} />{" "}
          </a>
          <a
            href="https://www.facebook.com/sizedclothing"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <BsFacebook className={style.icon} />{" "}
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=+584244429353&text=Hola%20buenos%20d%C3%ADas%20quiero%20comprar%20una%20franela%20SIZED"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <AiOutlineWhatsApp className={style.icon} />{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
