"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import styles from "./page.module.css";

//Componentes
import Contact from "../../components/contacto";

export default function Home() {
  const {data: session, status} = useSession();
  const router = useRouter();

  useEffect(() => { 
  if (status === "authenticated") {
    router.push("/dashboard");
  }
}, [status]);

  const [showContact, setShowContact] = useState(false);
  return (
    <main className={styles.pageContainer}>
      <div className={styles.page}>
        <div className={styles.mainContainer}>
          <div className={styles.navbar}>
            <div className={styles.sections}>
              <ul>
                <li>
                  <a href="">Acerca de</a>
                </li>
                <li onClick={() => setShowContact(!showContact)}>Contacto</li>
                <li>
                  <a href="">Más Información</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`${styles.contactBox} ${showContact ? styles.showContactBox : ""}`}
          >
            <Contact />
          </div>

          <div className={styles.titleContainer}>
            <h1 className={styles.title}>ÆroMM</h1>
          </div>

          <div className={styles.container}>
            <div className={styles.containerBtns}>
              <Link href="/registerpage">
                <button className={styles.btnRegister}>Registrarse</button>
              </Link>

              <Link href="/loginpage">
                <button className={styles.btnLogin}>Ingresar</button>
              </Link>

              <button onClick={() => signIn("google", { callbackUrl: "/dashboard" })} className={styles.btnGoogle}>Ingresar con Google</button>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
