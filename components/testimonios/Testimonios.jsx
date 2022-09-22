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
            <h3>Quedé encantada</h3>
            <span>
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
            </span>
            <p>
              Cúando me llegaron las prendas pude ver instantáneamente que son
              de muy buena calidad, se sienten muy bien en el cuerpo. Nunca
              pensé que una franela podría ser tan cómoda de usar hasta hoy.
            </p>
            <h4>- Nicole Sánchez</h4>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className={style.item}>
            <h3>Diseños muy chulos</h3>
            <span>
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
            </span>
            <p>
              A mí en particular me gustaron mucho los diseños ya que todo sale de la mente maestra diseñadora detrás de Sized. Son estilos nunca antes vistos, y eso es muy top.
            </p>
            <h4>- Martin Padron</h4>
          </article>
        </SwiperSlide>

        <SwiperSlide>
          <article className={style.item}>
            <h3>Excelente trato</h3>
            <span>
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
              <AiFillStar className={style.icon} />
            </span>
            <p>
              Fué muy fácil comprar con ellos, adémas, la tela y la calidad de sus productos es muy buena y buenos diseños. Me encanta, espero pronto ver más diseños únicos.
            </p>
            <h4>- Alejandro Villegas</h4>
          </article>
        </SwiperSlide>
      </Swiper>

      <p className={style.swipe}>Desliza &rarr;</p>

      <div className={style.container_wide}>
        <article className={style.item}>
          <h3>Quedé encantada</h3>
          <span>
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
          </span>
          <p>
            Cúando me llegaron las prendas pude ver instantáneamente que son de
            muy buena calidad, se sienten muy bien en el cuerpo. Nunca pensé que
            una franela podría ser tan cómoda de usar hasta hoy.
          </p>
          <h4>- Nicole Sánchez</h4>
        </article>

        <article className={style.item}>
          <h3>Diseños muy chulos</h3>
          <span>
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
          </span>
          <p>
          A mí en particular me gustaron mucho los diseños ya que todo sale de la mente maestra diseñadora detrás de Sized. Son estilos nunca antes vistos, y eso es muy top.
          </p>
          <h4>- Martin Padron</h4>
        </article>

        <article className={style.item}>
          <h3>Excelente trato</h3>
          <span>
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
            <AiFillStar className={style.icon} />
          </span>
          <p>
          Fué muy fácil comprar con ellos, adémas, la tela y la calidad de sus productos es muy buena y buenos diseños. Me encanta, espero pronto ver más diseños únicos.
          </p>
          <h4>- Alejandro Villegas</h4>
        </article>
      </div>
    </section>
  );
};

export default Testimonios;
