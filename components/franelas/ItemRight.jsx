import Image from "next/image";
import style from "./franelas.module.scss";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { AiOutlineWhatsApp } from "react-icons/ai";

const ItemRight = ({modelo, precio, descripcion, foto1, foto2, alt, enlace}) => {
  return (
    <>
      <article className={style.container}>
        <Swiper
          className={style.foto}
          modules={[Navigation]}
          navigation={{ clickable: true }}
        >
          <SwiperSlide>
            <Image src={foto1 || <Skeleton /> } alt={alt} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={foto2 || <Skeleton />} alt={alt} />
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
                <td>52</td>
                <td>78</td>
                <td>22</td>
                <td>30</td>
              </tr>
              <tr>
                <th>M</th>
                <td>52</td>
                <td>74</td>
                <td>20</td>
                <td>27</td>
              </tr>
            </tbody>
          </table>
          <a
            href={enlace}
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
          <h2 className={style.title}>{modelo}</h2>
          <h3 className={style.title}>{precio}</h3>
          <p className={style.title}>{descripcion}</p>
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
                <td>52</td>
                <td>78</td>
                <td>22</td>
                <td>30</td>
              </tr>
              <tr>
                <th>M</th>
                <td>52</td>
                <td>74</td>
                <td>20</td>
                <td>27</td>
              </tr>
            </tbody>
          </table>
          <a
            href={enlace}
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
            <Image src={foto1 || <Skeleton />} alt={alt} />
          </div>
          <div className={style.foto_item}>
            <Image src={foto2 || <Skeleton />} alt={alt} />
          </div>
        </div>

      </article>
    </>
  );
};

export default ItemRight;
