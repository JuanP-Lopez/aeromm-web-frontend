"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./register.module.css";

function Register() {

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState({});

  const [pic, setPic] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPic(file);

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
      console.log("file: ", file);
      console.log("url: ", url);
    }
  };

  useEffect(() => {
      return () => {
        if (preview) URL.revokeObjectURL(preview);
      };
    }, [preview]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("image", pic);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      console.log("Respuesta del servidor: ", result);
      if (result.success == true) {
        router.push("/loginpage");
      }
    } catch (error) {
      console.log("Error al enviar: ", error);
    }
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPic(null);
    setPreview(null);
    setErr({});
  };

  const [leaving, setLeaving] = useState(false);
  const handleClick = () => {
    setLeaving(true);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.formContainer}>
        <div className={styles.btnContainer}>
          <button
            className={`${styles.btnBack} ${leaving ? styles.btnBackOut : ""}`}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </button>
        </div>
        <h2 className={styles.header}>Registro</h2>

        <form className={styles.container} onSubmit={handleSubmit}>
          <label className={styles.label}>Nombre de usuario</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Introduce un nombre de usuario"
            className={styles.input}
          />

          <label className={styles.label}>Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Introduce tu correo electrónico"
            className={styles.input}
          />

          <label className={styles.label}>Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Introduce una contraseña"
            className={styles.input}
          />

          <label className={styles.label}>Confirmar contraseña</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirma tu contraseña"
            className={styles.input}
          />

          <div className={styles.fileContainer}>
            <label htmlFor="file" className={styles.inputImage}>
              Subir foto de perfil
            </label>

            <input
              type="file"
              accept="image/*"
              name="file"
              id="file"
              onChange={handleFileChange}
              className={styles.fileInput}
            />
          </div>

          <div className={styles.previewContainer}>
            {preview && (
                <img src={preview} className={styles.preview} alt="preview" />
              )}
          </div>

          <button type="submit" className={styles.button}>
            Registrar
          </button>
        </form>

      </div>
    </div>
  );
}

export default Register;
