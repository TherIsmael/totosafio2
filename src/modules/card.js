import styles from "./card.module.css";

export default function Card() {
  return (
    <div className="card">
        <div className={`${styles.cardImage}`}>

        </div>
        <div className="cardText">
            <h2 className="cardTitle">clan</h2>
            <p>texto de prueba</p>
        </div>
    </div>
  );
}