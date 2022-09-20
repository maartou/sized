import style from './franelas.module.scss'
import ItemLeft from "./ItemLeft";
import ItemRight from './ItemRight';

const Franelas = () => {
  return (
    <section className={style.section}>
      <ItemLeft />
      <ItemRight />
    </section>
  );
};

export default Franelas;
