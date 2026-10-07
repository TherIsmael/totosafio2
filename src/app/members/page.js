import styles from "./members.module.css"
import Header from "../../modules/header"
import Card from "../../modules/card"

export default function ListaMiembros() {
  return (
    <section>
        <Header />
        <div className={styles.membersMain}>
            <div className={styles.membersTitle}>
                <p className="titulo">asjhk</p>
            </div>
            <div className={styles.membersGrid}>
           {/* mandar nombre jugador, clan al que pertenece y skin en un json que contenga esa informacion*/}
           
            <Card 
                title={"asddf"}
                text={"fhdsg"}
            />
            
            </div>
        </div>
    </section>
  );
}