import styles from "./nosotros.module.css"
import Header from "../../modules/header"
import Card from "../../modules/card"

export default function Mods() {
  return (
    <section className={`${styles.modsMain}`}>
        <Header />
        <div className={`${styles.modsText}`}>
            <p className="titulo">titulo</p>
            <p>texto</p>
        </div>
        <div className={`${styles.modsCard}`}>
            {/*ciclo for para mostrar n cantidad de cards */}
            <Card />
        </div>
    </section>
  );
}