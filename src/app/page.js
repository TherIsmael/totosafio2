import styles from "./page.module.css";
import Header from "../modules/header";
import Card from "../modules/card";
import Link from 'next/link';


export default function Home() {
  return (
   <div className={styles.main}>
      <Header />
      <section className={`${styles.content} ${styles['content-logo']}`}>
        <div className={styles.logo}></div>
      </section>

      <section className={`${styles.content} ${styles['content-welcome']}`}>
        <p className={`${styles.titulo} `}>Bienvenido a Totosafio 2</p>
        <p className={`${styles.texto} `}>asdsdfhsuidhfsdfshdjgfhdsgf yuadgaafhdgsfhasgfjhegf aseh ssdhfsdajfgasdj fashdjgfjhajsd sahjdsgfjhasdg fad hfjksh lash fdshfsdbfhja </p>
        <Link href="#" className="buttonMain">Miembros vivos</Link>
      </section>
      <section className={`${styles.content} ${styles['content-clanes']}`}>
        <p className={`${styles.titulo} `}>Clanes</p>
        <div>
          <Card />
        </div>
      </section>
      <section className={`${styles.content} ${styles['content-mods']}`}></section>
   </div>
  );
}
