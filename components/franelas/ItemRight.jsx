import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import style from "./franelas.module.scss";
import cats from "../../public/img/franelas/cats.jpg";
import cats_item from "../../public/img/franelas/cats_item.jpg";
import { AiOutlineWhatsApp } from "react-icons/ai";

const ItemRight = () => {
  return (
    <>
      <article className={style.container}>
        <Swiper
          className={style.foto}
          modules={[Navigation]}
          navigation={{ clickable: true }}
        >
          <SwiperSlide>
            <Image src={cats} alt="franela sized cats" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={cats_item} alt="franela sized cats" />
          </SwiperSlide>
        </Swiper>

        <div className={style.content}>
          <h2>Unlucky cats model</h2>
          <h3>$17.99</h3>
          <p>Descripción de la franela, dar detalles, etc...</p>
          <table>
            <caption>Medidas (cm)</caption>
            <thead>
              <tr>
                <th>Talla</th>
                <th>Ancho</th>
                <th>Largo</th>
                <th>Ancho manga</th>
                <th>Largo manga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>L</th>
                <td>20</td>
                <td>30</td>
                <td>25</td>
                <td>30</td>
              </tr>
              <tr>
                <th>M</th>
                <td>10</td>
                <td>15</td>
                <td>20</td>
                <td>40</td>
              </tr>
            </tbody>
          </table>
          <a
            href="https://api.whatsapp.com/send?phone=+584244429353&text=Hola%20buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20la%20franela%20SIZED%20SIGHLESS"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <AiOutlineWhatsApp className={style.icon} />
            </span>
            Comprar por whatsapp
          </a>
        </div>
      </article>

      <article className={style.container_2}>

        <div className={style.content}>
          <h2 className={style.title}>Unlucky cats model</h2>
          <h3 className={style.title}>$17.99</h3>
          <p className={style.title}>Descripción de la franela, dar detalles, etc...</p>
          <table>
            <caption>Medidas (cm)</caption>
            <thead>
              <tr>
                <th>Talla</th>
                <th>Ancho</th>
                <th>Largo</th>
                <th>Ancho manga</th>
                <th>Largo manga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>L</th>
                <td>20</td>
                <td>30</td>
                <td>25</td>
                <td>30</td>
              </tr>
              <tr>
                <th>M</th>
                <td>10</td>
                <td>15</td>
                <td>20</td>
                <td>40</td>
              </tr>
            </tbody>
          </table>
          <a
            href="https://api.whatsapp.com/send?phone=+584244429353&text=Hola%20buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20la%20franela%20SIZED%20SIGHLESS"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <AiOutlineWhatsApp className={style.icon} />
            </span>
            Comprar por whatsapp
          </a>
        </div>

        <div className={style.foto_container}>
          <div className={style.foto_item}>
            <Image src={cats} alt="franela sized sighless" />
          </div>
          <div className={style.foto_item}>
            <Image src={cats_item} alt="franela sized sighless" />
          </div>
        </div>

      </article>
    </>
  );
};

export default ItemRight;
