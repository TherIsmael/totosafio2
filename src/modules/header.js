import styles from "./header.module.css";
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.header_left}>
        <Link className={`${styles.header_name} links`} href="#">
          Totosafio 2
        </Link>
      </section>

      <section className={styles.header_rigth}>
        <Link className="links" href="/">Clanes</Link>
        <Link className="links" href="#">Miembros</Link>
        <Link className="links" href="#">Eventos</Link>
        <Link className="links" href="/mods">Mods</Link>
      </section>
    </header>
  );
}