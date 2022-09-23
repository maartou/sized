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
    <section className={style.section} id="modelos">
      <ItemLeft
        modelo="Franela oversize Sized Sighless"
        precio="$19.99"
        descripcion="Este es nuestro modelo favorito. Un diseño minimalista en clásico negro hacen de esta franela una de nuestras más vendidas."
        foto1={calavera}
        foto2={calavera_2}
        alt="franela oversize sized sightless"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Hola%20buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20la%20franela%20SIZED%20SIGHLESS"
      />

      <ItemRight
        modelo="Franela oversize UNLUCKY CATS model"
        precio="$16.99"
        descripcion="¿Eres fan de las caricaturas clásicas? nosotros sí. Con esta prenda llevarás toda la escencia de la vieja escuela a dónde quiera que vayas."
        foto1={cats}
        foto2={cats_item}
        alt="sized unlucky cats"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20una%20franela%20SIZED%20UNLUCKY%20CATS%20"
      />

      <ItemLeft
        modelo="Camiseta oversize Sized Fire Flower"
        precio="$17.99"
        descripcion="Lleva el control de las tendencias con este diseño único y original. FIRE FLOWER es para aquellos apasionados que nunca pierden el estilo dónde sea que estén."
        foto1={flower}
        foto2={flower_2}
        alt="fire flower sized"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20una%20franela%20SIZED%20FLOWER%20"
      />

      <ItemRight
        modelo="Franela oversize Sized Mars Red"
        precio="$17.99"
        descripcion="¿Quieres destacar? indudablemente nuestro rojo intenso MARS RED es lo que necesitas, acostumbráte a ser el centro de atención cuando lleves esta prenda."
        foto1={red}
        foto2={red2}
        alt="sized mars red model"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20una%20franela%20SIZED%20MARS%20RED"
      />

      <ItemLeft
        modelo="SAVAGE MOOD sized oversized"
        precio="$16.99"
        descripcion="Simple, fresco y minimalista. Tres palabras que describen a la perfección nuestro primer diseño, el bastión de todos los demás."
        foto1={savage}
        foto2={savage2}
        alt="sized savage model"
        enlace="https://api.whatsapp.com/send?phone=+584244429353&text=Buenos%20d%C3%ADas%20me%20gustar%C3%ADa%20comprar%20una%20franela%20SIZED%20SAVAGE%20WHITE"
      />
    </section>
  );
};

export default Franelas;
