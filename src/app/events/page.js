import styles from "./eventos.module.css"
import Header from "../../modules/header"
import Text from "../../modules/text"
import eventos from "../../data/events.json"
export default function Eventos() {
  return (
    <div>
      <Header />
      <section className={styles.eventosMain}>
        {eventos.map((even)=>{
            return(
                <Text 
                    key={even.id}
                    title={even.titulo}
                    text={even.text}
                />
            );
        })}
      </section>
    </div>
  );
}