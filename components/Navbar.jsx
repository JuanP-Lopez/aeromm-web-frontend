"use client";

import { useEffect, useState } from "react";

{
  /*Navegacion*/
}
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserMd,
  faUsers,
  faUser,
  faListAlt,
  faLock,
  faDownload,
  faCogs,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const pathName = usePathname();

  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const [active, setActive] = useState("Sistema");

  const Button = ({ label, icon, href }) => {
    const isActive = pathName === href;

    return (
      <Link
        href={href}
        onClick={() => setActive(label)}
        className={`${styles.button} ${active === label ? styles.active : ""}`}
      >
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        <span>{label}</span>
      </Link>
    );
  };

  return (
    <nav className={styles.nav}>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <div className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.logo}>Logo</h2>
        </div>

        <h3 className={styles.title}>Administración</h3>
        <Button label="Sistema" icon={faUserMd} href={"/dashboard"} />
        <Button label="Grupos" icon={faUsers} href={"/dashboard/groupspage"} />
        <Button label="Usuarios" icon={faUser} href={"/dashboard"} />
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>Registro</h3>
        <Button label="Historial" icon={faListAlt} href={"/dashboard"} />
        <Button label="Seguridad" icon={faLock} href={"/dashboard"} />
      </div>

      <div className={styles.section}>
        <h3 className={styles.title}>Acciones rápidas</h3>
        <Button label="Exportar datos" icon={faDownload} href={"/dashboard"} />
        <Button label="Opciones" icon={faCogs} href={"/dashboard/optionspage/"} />
      </div>

      <div className={styles.userinfo}>
        <div className={styles.user}>
          <img src="prueba3.jpg" alt="PFP" className={styles.userpfp} />
          <div className={styles.usermaininfo}>
            {user ? (<span className={styles.username}>{user.name}</span>) : <span className={styles.username}>Sistema</span>}
          </div>
        </div>
        {/*Boton temporal, eliminar en la versión final*/}
        <Link href="/" className={styles.linkClose}>
          <button className={"btn btn-sm btn-outline-danger"}>
            <FontAwesomeIcon icon={faClose} />
            Salir
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
