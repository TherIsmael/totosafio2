import styles from "./card.module.css";

export default function Card() {
  return (
    <div className="card">
        <section className={`${styles.cardImage}`}>

        </section>
        <div className="cardText">
            <h2 className="cardTitle">clan</h2>
            <p className="ligthText">texto de prueba</p>
        </div>
    </div>
  );
}