"use client"

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

//Componentes
import Contact from "../../components/contacto";

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  return (
    <div className={styles.page}>
      <div className={styles.mainContainer}>

        <div className={styles.navbar}>
          <div className={styles.sections}>
            <ul>
              <li><a href="">Acerca de</a></li>
              <li onClick={() => setShowContact(!showContact)}>Contacto</li>
              <li><a href="">Más Información</a></li>
            </ul>
          </div>
        </div>

        <div className={`${styles.contactBox} ${showContact ? styles.showContactBox : ""}`}>
          <Contact />
        </div>

        <div className={styles.titleContainer}>
          <h1 className={styles.title}>ÆroMM</h1>
        </div>

        <div className={styles.container}>
          <div className={styles.containerBtns}>

            <Link href="/registerpage">
              <button className={styles.btnRegister}>
                Registrarse
              </button>
            </Link>

            <Link href="/loginpage">
              <button className={styles.btnLogin}>
                Ingresar
              </button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}