"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

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
  const { data: session } = useSession();
  console.log("Sesion: ", session);

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
        <span className={styles.text}>{label}</span>
      </Link>
    );
  };

  return (
    <nav className={styles.nav}>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>

      <div className={styles.container}>
        <div className={styles.section}>
          <Button label={"Sistema"} icon={faUserMd} href={"/dashboard"} />
          <Button
            label="Grupos"
            icon={faUsers}
            href={"/dashboard/groupspage"}
          />
          <Button label="Usuarios" icon={faUser} href={"/dashboard"} />
        </div>

        <div className={styles.section}>
          <Button label="Historial" icon={faListAlt} href={"/dashboard"} />
          <Button label="Seguridad" icon={faLock} href={"/dashboard"} />
        </div>

        <div className={styles.section}>
          <Button
            label="Exportar datos"
            icon={faDownload}
            href={"/dashboard"}
          />
          <Button
            label="Opciones"
            icon={faCogs}
            href={"/dashboard/optionspage/"}
          />
        </div>
        <div className={styles.userinfo}>
            {session ? (
              <div className={styles.user}>
                <img
                  src={session?.user.image}
                  onError={() => console.log("falló imagen")}
  onLoad={() => console.log("cargó imagen")}
                  alt="PFP"
                  className={styles.userpfp}
                />
                <div className={styles.usermaininfo}>
                  <span className={styles.username}>{session?.user.name}</span>
                </div>
              </div>
            ) : user ? (
              <div className={styles.user}>
                <img
                  src={user.picUrl}
                  alt="PFP"
                  className={styles.userpfp}
                />
                <div className={styles.usermaininfo}>
                  <span className={styles.username}>{user.name}</span>
                </div>
              </div>
            ) : (
              <span className={styles.username}>Sistema</span>
            )}
          </div>
        </div>
    </nav>
  );
}

export default Navbar;
