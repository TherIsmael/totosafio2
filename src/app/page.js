import Image from "next/image";
import styles from "./page.module.css";
import Header from "../modules/header";
export default function Home() {
  return (
   <div className={styles.main}>
      <Header />
      <section className={`${styles.content} ${styles['content-logo']}`}>
        <div className={styles.logo}></div>
      </section>

      <section className={`${styles.content} ${styles['content-welcome']}`}></section>
      <section className={`${styles.content} ${styles['content-clanes']}`}></section>
      <section className={`${styles.content} ${styles['content-mods']}`}></section>
   </div>
  );
}
