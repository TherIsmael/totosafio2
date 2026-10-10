import styles from "./clans.module.css"
import Header from "../../modules/header"
import Card from "../../modules/card"
export default function Clans() {
  return (
    <section>
        <Header />
        <div className={styles.clansMain}>
            <p className="titulo">Clanes</p>
            <div className={styles.clansGrid}>
              {}
              <Card 
                title="titulo"
                text="asd"
              />
              <Card 
                title="titulo"
                text="asd"
              />
              <Card 
                title="titulo"
                text="asd"
              />
              <Card 
                title="titulo"
                text="asd"
              />
            </div>
        </div>
    </section>
  );
}