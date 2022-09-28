import Image from 'next/image';
import style from './Gallery.module.scss'
import savage from "../../public/img/franelas/savage.jpg";
import calavera from "../../public/img/franelas/calavera.jpg";
import flower from "../../public/img/franelas/flower.jpg";
import cats from "../../public/img/franelas/cats.jpg";
import red from "../../public/img/franelas/red.jpg";


const Gallery = () => {
  return (
    <section className={style.section}>
        <h4 id="gallery">- Be Different -</h4>

        <div className={style.grid}>
            <div className={style.foto}>
                <Image src={savage} alt="franelas oversize savage sized" placeholder="blur" />
            </div>
            <div className={style.foto}>
                <Image src={flower} alt="franelas oversize sized fire flower" placeholder="blur" />
            </div>
            <div className={style.foto}>
                <Image src={cats} alt="franelas oversize sized unlucky cats" placeholder="blur" />
            </div>
            <div className={style.foto}>
                <Image src={red} alt="franelas oversize sized mars red" placeholder="blur" />
            </div>
            <div className={`${style.foto} ${style.foto_grande}`}>
                <Image src={calavera} alt="franelas oversize sized sighless" placeholder="blur" />
            </div>
        </div>


    </section>
  )
}

export default Gallery