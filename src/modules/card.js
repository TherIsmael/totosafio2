import styles from "./card.module.css";

export default function Card({ title, text, link, customClass , hideImage, imageSrc, textA }) {
  return (
    <div className={`card ${styles[customClass]}`}>
        <section className={`${styles.cardImage}`}>

      {!hideImage && imageSrc && (
        <img 
          src={imageSrc} 
            alt={`Imagen del mod ${title}`}
        />
      )}
        </section>
        <div className="cardText">
            <h2 className="cardTitle" id="cardTitle">{title}</h2>
            <p className="ligthText" id="cardText">{text}</p>
            <a className="buttonMain" id="cardLink" href={link} target="_blank" rel="noopener noreferrer">
            {textA}
        </a>
        </div>
    </div>
  );
}