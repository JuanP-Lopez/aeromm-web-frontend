"use client";

import { useEffect, useState } from "react";
import styles from "./create_group.module.css";

function CreateGroup() {
  const [user, setUser] = useState("");
  const [group, setGroup] = useState("");
  const [description, setDescription] = useState("");
  const [pic, setPic] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUser(user.id);
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPic(file);

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
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
    formData.append("id", user)
    formData.append("group", group);
    formData.append("description", description);
    formData.append("image", pic);

    try {
      const res = await fetch("/api/groups/create", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log(result);
    } catch (error) {
      console.log("Error al crear grupo: ", error);
    }
    setGroup("");
    setDescription("");
    setPic(null);
    setPreview(null);
  };

  return (
    <div className={styles.main}>
      <div className={styles.formContainer}>
        <h3 className={styles.title}>Crea un grupo</h3>
        <div>
          <form action="" className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>Nombre del grupo</label>

            <input
              className={styles.input}
              type="text"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              required
              placeholder="Introduce el nombre del grupo"
            />

            <label className={styles.label}>Descripción del grupo</label>

            <textarea
              className={styles.inputDesc}
              type="textarea"
              rows="4"
              cols="50"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Introduce la descripción del grupo"
            />

            <div className={styles.fileContainer}>
              <label htmlFor="file" className={styles.inputImage}>
                Subir foto del grupo
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

            <button type="submit" className={styles.submitButton}>
              Crear grupo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateGroup;
