import styles from "./page.module.css";
import Header from "../modules/header";
import Card from "../modules/card";
import Link from 'next/link';
import Text from "../modules/text";
import modsData from "../data/mods_curseforge.json";
import clansData from "../data/clans.json"

export default function Home() {
  return (
   <div className={styles.main}>
      <Header />
      <section className={`${styles.content} ${styles['content-logo']}`}>
        <div className={styles.logo}></div>
      </section>

      <section className={`${styles.content} ${styles['content-welcome']}`}>
        <p className="titulo">Bienvenido a Totosafio 2</p>
        <p className={`${styles.texto} `}>asdsdfhsuidhfsdfshdjgfhdsgf yuadgaafhdgsfhasgfjhegf aseh ssdhfsdajfgasdj fashdjgfjhajsd sahjdsgfjhasdg fad hfjksh lash fdshfsdbfhja </p>
        <Link href="#" className="buttonMain">Miembros vivos</Link>
      </section>
      <section className={`${styles.content} ${styles['content-clanes']}`}>
  <p className="titulo">Clanes</p>
  <div className={`${styles.cardContainer}`}>
    {clansData.map((clan, index) => {
      const claseIntercalada = index % 2 === 0 ? 'class1' : 'class2';

      // Transformamos el arreglo en un texto separado por comas
      const textoMiembros = clan.miembros.join(', ');

      return (
        <Card 
          key={clan.id} 
          title={clan.nombre_clan} 
          text={textoMiembros} /* <--- Aquí pasamos el texto ya formateado */
          link="#" 
          textA="Ver clan" 
          customClass={claseIntercalada} 
          imageSrc={clan.imagen} 
          hideImage={false} 
        />
      );
    })}
  </div>
</section>
      <section className={`${styles.content} ${styles['content-mods']}`}>
        <div className={`${styles.modsTexto} `}> 
          <p className="titulo">Mods destacados</p>
          
          <div className={`${styles.modsTextoGroup} `}>
            {modsData.map((mod) =>{
              if (mod.id <= 3){
                return(
                  <Text 
                    key={mod.id}
                    title={mod.nombre_mod}
                    text={mod.descripcion}
                  />  
                );
              }
            }
          )}
          </div> 
          <Link href="./mods" className="buttonMain">Ver mods</Link>
        </div>
        <div className={`${styles.modsImagen} `}>
          <img 
          src="/assets/img_mods/aquamirae.jpg" 
            alt="Imagen de mod"
        />
        </div>
      </section>
   </div>
  );
}
