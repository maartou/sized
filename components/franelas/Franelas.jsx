import style from "./franelas.module.scss";
import ItemLeft from "./ItemLeft";
import ItemRight from "./ItemRight";
import calavera from "../../public/img/franelas/calavera.jpg";
import calavera_2 from "../../public/img/franelas/calavera_item.jpg";
import flower from "../../public/img/franelas/flower.jpg";
import flower_2 from "../../public/img/franelas/flower_item.jpg";
import cats from "../../public/img/franelas/cats.jpg";
import cats_item from "../../public/img/franelas/cats_item.jpg";
import red from "../../public/img/franelas/red.jpg";
import red2 from "../../public/img/franelas/red_item.jpg";
import savage from "../../public/img/franelas/savage.jpg";
import savage2 from "../../public/img/franelas/savage_item.jpg";

const Franelas = () => {
  return (
    <section className={style.section}>
      <ItemLeft
        modelo="Sized Sighless"
        precio="$19.99"
        descripcion="Descripcion de las franelas orientadas al SEO"
        foto1={calavera}
        foto2={calavera_2}
        alt="sized calavera"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Hola%20buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20la%20franela%20SIZED%20SIGHLESS"
      />

      <ItemRight
        modelo="Sized unlucky cats"
        precio="$17.99"
        descripcion="franela unlucky cats"
        foto1={cats}
        foto2={cats_item}
        alt="unlucky cats sized"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20una%20franela%20SIZED%20UNLUCKY%20CATS%20"
      />

      <ItemLeft
        modelo="Sized flower fire model"
        precio="$17.99"
        descripcion="Descripcion de las franelas orientadas al SEO"
        foto1={flower}
        foto2={flower_2}
        alt="sized flower model"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20una%20franela%20SIZED%20FLOWER%20"
      />

      <ItemRight
        modelo="Sized RED model S"
        precio="$17.99"
        descripcion="franela red model red hot chilli"
        foto1={red}
        foto2={red2}
        alt="red chulli uuuu sized"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20una%20franela%20SIZED%20MARS%20RED"
      />

      <ItemLeft
        modelo="Sized Savage Model Exclusive"
        precio="$17.99"
        descripcion="Descripcion de las franelas orientadas al SEO"
        foto1={savage}
        foto2={savage2}
        alt="sized savage model"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20una%20franela%20SIZED%20SAVAGE%20WHITE"
      />
    </section>
  );
};

export default Franelas;
