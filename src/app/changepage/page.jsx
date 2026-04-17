"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./change.module.css";

function ChangeUser() {
  const router = useRouter();
  const [user_id, setUser_id] = useState("");
  const [og_username, setOg_username] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [og_password, setOg_password] = useState("");

  useEffect(() => {
      const storedUser = localStorage.getItem("user");
  
      if (storedUser) {
        const user = (JSON.parse(storedUser));
        setUser_id(user.id);
        setOg_username(user.name);
        setEmail(user.email);
      }
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { user_id, og_username, username, email, password, og_password};
    try {
      const res = await fetch("/api/changeuser/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      console.log("Respuesta del servidor: ", result);
      if (result.success == true) {
        localStorage.setItem("user", JSON.stringify(result.user));
        router.push("/dashboard/optionspage/");
      }
    } catch (error) {
      console.log("Error al enviar: ", error);
    }
    setUsername("");
    setPassword("");
    setOg_password("");
  };

  const [leaving, setLeaving] = useState(false);
  const handleClick = () => {
    setLeaving(true);
    setTimeout(() => {
      router.push("/dashboard/");
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.btnContainer}>
        <button
          className={`${styles.btnBack} ${leaving ? styles.btnBackOut : ""}`}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
      </div>
      <h2 className={styles.header}>Cambiar datos de usuario</h2>

      <form className={styles.container} onSubmit={handleSubmit}>
        <label className={styles.label}>Nombre de usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Introduce un nuevo nombre de usuario"
          className={styles.input}
        />

        <label className={styles.label}>Nueva contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Introduce una nueva contraseña"
          className={styles.input}
        />

        <label className={styles.label}>Confirmar contraseña anterior</label>
        <input
          type="password"
          value={og_password}
          onChange={(e) => setOg_password(e.target.value)}
          required
          placeholder="Confirma tu nueva contraseña"
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          Registrar
        </button>
      </form>
    </div>
  );
}

export default ChangeUser;
