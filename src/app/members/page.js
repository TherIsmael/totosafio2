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
           { /*jugadores.map((jugador, index)=>{
            return({*/}
                <Card 
                    title={/*jugador.nombre*/""}
                    text={/*jugador.clan*/''}
                />{/*}
            );
           })*/}
           
            
            
            </div>
        </div>
    </section>
  );
}