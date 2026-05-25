"use client";

import styles from "./profile.module.css";

import { useState, useEffect } from "react";

function ProfilePage() {
    const { username, setUsername } = useState("");
    const { description, setDescription } = useState("");
    const { date, setDate } = useState("");

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className={styles.pic} />
        <img src="/Profile.jpg" alt="Profile" className={styles.profilePic} />

        <div className={styles.banner} />
        <img
            src="/header.png"
            alt="Header"
            className={styles.profileHeader}
          />
      </section>

      <div className={styles.userinfo}>
        <h5 className={styles.username}>Nombre usuario</h5>
        <textarea
          type="textarea"
          rows={4}
          cols={50}
          className={styles.userdescription}
          placeholder="Descripción del usuario"
        />
      </div>

      <section className={styles.infoGrid}>
        <div className={styles.gridContent}>
          <h5 className={styles.gridHeader}>Correo electrónico</h5>
          <h5 className={styles.gridHeader}>Fecha de registro</h5>
          <h5 className={styles.gridHeader}>Cantidad de grupos creados</h5>
          <h5 className={styles.gridHeader}>Grupos de los que forma parte</h5>
        </div>

        <div className={styles.gridContent}></div>

        <div className={styles.gridContent}>
          <h5 className={styles.gridHeader}>Último correo enviado</h5>
          <h5 className={styles.gridHeader}>Último correo recibido</h5>
          <h5 className={styles.gridHeader}>Usuarios en la organización</h5>
          <h5 className={styles.gridHeader}>Fechas más activo</h5>
        </div>
      </section>
    </main>
  );
}

export default ProfilePage;
