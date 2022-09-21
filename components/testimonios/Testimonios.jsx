import style from "./Testimonios.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AiFillStar } from "react-icons/ai";

import React from "react";

const Testimonios = () => {
  return (
    <section className={style.section}>
      <h4>- ¿Que dicen de nosotros? -</h4>

      <Swiper
        autoHeight={true}
        spaceBetween={40}
        slidesPerView={1}
        className={style.container}
      >
        <SwiperSlide>
          <article className={style.item}>
            <h3>Fantástico</h3>
            <span>
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, repellendus! Nostrum libero eum pariatur nisi facere,
              et ut esse omnis at fugiat maxime mollitia vero expedita ipsa
              consequuntur? Minima, itaque.
            </p>
            <h4>- Miguel Padrón</h4>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className={style.item}>
            <h3>Muy cómodas sus camisetas</h3>
            <span>
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, repellendus! Nostrum libero eum pariatur nisi facere,
              et ut esse omnis at fugiat maxime mollitia vero expedita ipsa
              consequuntur? Minima, itaque.
            </p>
            <h4>- Martin Padron</h4>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className={style.item}>
            <h3>Me veo genial</h3>
            <span>
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
            </span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, repellendus! Nostrum libero eum pariatur nisi facere,
              et ut esse omnis at fugiat maxime mollitia vero expedita ipsa
              consequuntur? Minima, itaque.
            </p>
            <h4>- Samuel Arrieta</h4>
          </article>
        </SwiperSlide>


      </Swiper>
    </section>
  );
};

export default Testimonios;
