import styles from "./page.module.css";
import Header from "../modules/header";
import Card from "../modules/card";
import Link from 'next/link';
import Text from "../modules/text";
import modsData from "../../public/mods_curseforge.json";

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
    {Array.from({ length: 3 }).map((_, index) => (
      <Card 
        key={index} 
        title={`Clan ${index + 1}`} 
        text="Descripción breve de este clan." 
        link="#" 
        textA="Ver clan" 
        customClass="class1" /* Puedes usar la lógica de index % 2 aquí también si quieres intercalar */
        imageSrc="/ruta-imagen-clan.png" /* Pon aquí la ruta real de la imagen para los clanes, o null si no llevan imagen */
        hideImage={false} 
      />
    ))}
  </div>
</section>
      <section className={`${styles.content} ${styles['content-mods']}`}>
        <div className={`${styles.modsTexto} `}> 
          <p className="titulo">Mods destacados</p>
          
          <div className={`${styles.modsTextoGroup} `}>
            {modsData.map((mod,index) =>{
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
        <div className={`${styles.modsImagen} `}></div>
      </section>
   </div>
  );
}
