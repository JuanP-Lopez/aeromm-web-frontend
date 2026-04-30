"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./options.module.css";

function GroupSystem() {
  const { data: session } = useSession();
  const router = useRouter();
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const deleteAccount = async () => {
    const id = user.id;

    console.log("Id recuperado: ", id);

    try {
      const res = await fetch("/api/deleteuser/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(id),
      });
      const result = await res.json();
      console.log("Respuesta del servidor: ", result);
      if (result.success == true) {
        localStorage.clear();
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>Opciones del sistema</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.sesion}>
          <h4>Datos de sesión</h4>
          <div className={styles.dataContainer}>
            {session ? (
              <span>
                <span className={styles.data}>
                  Nombre de usuario: {session?.user.name} |
                </span>
                <span className={styles.data}>
                  Correo electrónico: {session?.user.email} |
                </span>
              </span>
            ) : user ? (
              <span>
                <span className={styles.data}>
                  Nombre de usuario: {user.name} |
                </span>
                <span className={styles.data}>
                  Correo electrónico: {user.email} |
                </span>
              </span>
            ) : (
              <span className={styles.username}>Sistema</span>
            )}
          </div>
        </div>

        <div className={styles.options}>
          <h4>Opciones</h4>
          <div className={styles.optionsContainer}>
            <div className={styles.checkButtons}>
              <label>
                <input
                  type="checkbox"
                  name=""
                  className={styles.checkboxBtns}
                />
                Recibir notificaciones
              </label>
              <label>
                <input
                  type="checkbox"
                  name=""
                  className={styles.checkboxBtns}
                />
                Generar historial
              </label>
              <label>
                <input
                  type="checkbox"
                  name=""
                  className={styles.checkboxBtns}
                />
                Recolectar datos
              </label>
            </div>

            <div className={styles.btns}>
              <button className="btn btn-outline-info">Cambiar idioma</button>
              <Link href="/changepage">
                <button className="btn btn-outline-success">
                  Cambiar contraseña
                </button>
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={deleteAccount}
              >
                Borrar cuenta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupSystem;
