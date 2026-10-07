import styles from "./text.modules.css"
export default function ListaMiembros({title, text}) {
  return (
    <div>
      <p className="cardTitle">{title}</p>
      <p className="ligthText">{text}</p>
    </div>
  );
}