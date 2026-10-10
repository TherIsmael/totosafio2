import styles from "./header.module.css";
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.header_left}>
        <Link className={`${styles.header_name} links`} href="/">
          Totosafio 2
        </Link>
      </section>

      <section className={styles.header_rigth}>
        <Link className="links" href="/clans">Clanes</Link>
        <Link className="links" href="/members">Miembros</Link>
        <Link className="links" href="/events">Eventos</Link>
        <Link className="links" href="/mods">Mods</Link>
      </section>
    </header>
  );
}