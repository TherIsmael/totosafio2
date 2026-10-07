import styles from "./mods.module.css"
import Header from "../../modules/header"
import Card from "../../modules/card"
import modsData from '../../../public/mods_curseforge.json';

export default function Mods() {
  return (
    <section className={`${styles.modsMain}`}>
        <Header />
        <div className={`${styles.modsText}`}>
            <p className="titulo">Mods incluidos en totosafio 2</p>
        </div>
        <div className={`${styles.modsCard}`}>
            {modsData.map((mod, index) => {
          const claseIntercalada = index % 2 === 0 ? 'classR' : 'classL';
          
          const ocultarImagen = index >= 4; 

          return (
            <Card 
                key={mod.id} 
                title={mod.nombre_mod} 
                text={mod.descripcion} 
                link={mod.link_curseforge}
                customClass={claseIntercalada} 
                hideImage={ocultarImagen}
                imageSrc={`/assets/img_mods/${mod.imagen}`} 
                textA={"Ver en forge"}
            />
          );
        })}
        </div>
    </section>
  );
}