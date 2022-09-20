import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import style from "./franelas.module.scss";
import { AiOutlineWhatsApp } from "react-icons/ai";

const ItemLeft = ({modelo, precio, descripcion, foto1, foto2, alt}) => {
  return (
    <>
      <article className={style.container}>
        <Swiper
          className={style.foto}
          modules={[Navigation]}
          navigation={{ clickable: true }}
        >
          <SwiperSlide>
            <Image src={foto1} alt={alt} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={foto2} alt={alt} />
          </SwiperSlide>
        </Swiper>

        <div className={style.content}>
          <h2>{modelo}</h2>
          <h3>{precio}</h3>
          <p>{descripcion}</p>
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
        <div className={style.foto_container}>
          <div className={style.foto_item}>
            <Image src={foto1} alt={alt} />
          </div>
          <div className={style.foto_item}>
            <Image src={foto2} alt={alt} />
          </div>
        </div>

        <div className={style.content}>
          <h2>{modelo}</h2>
          <h3>{precio}</h3>
          <p>{descripcion}</p>
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
    </>
  );
};

export default ItemLeft;
