import style from './franelas.module.scss'
import ItemLeft from "./ItemLeft";
import ItemRight from './ItemRight';
import calavera from "../../public/img/franelas/calavera.jpg";
import calavera_2 from "../../public/img/franelas/calavera_item.jpg";
import flower from "../../public/img/franelas/flower.jpg";
import flower_2 from "../../public/img/franelas/flower_item.jpg";

const Franelas = () => {
  return (
    <section className={style.section}>
      <ItemLeft
      modelo = "Sized Sighless"
      precio = "$19.99"
      descripcion="Descripcion de las franelas orientadas al SEO"
      foto1 = {calavera}
      foto2 = {calavera_2}
      alt= "sized calavera"
      />
      <ItemRight />
      <ItemLeft
      modelo = "Sized flower fire model"
      precio = "$17.99"
      descripcion="Descripcion de las franelas orientadas al SEO"
      foto1 = {flower}
      foto2 = {flower_2}
      alt= "sized flower model"
      />
    </section>
  );
};

export default Franelas;
