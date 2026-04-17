{/*
<p>{name}</p>
<p>{id}</p>
<p>{members}</p>
<p>{status}</p>
*/}
import styles from "./groups.module.css";

function Group_tres({ imgGroup, name, id, members, status }) {
  return (
    <div className={styles.data}>
      <span className={styles.dataInfo}>
        <div className={styles.dataMain}>
          <img src="/prueba_tres.png" alt="N" className={styles.groupIcon} />

          <div className={styles.dataName}>
            <span>Clientes</span>
            <span className={styles.sub}>Creado hace 3 meses.</span>
          </div>
        </div>
      </span>

      <span className={styles.dataInfo}>2632</span>
      <span className={styles.dataInfo}>43</span>

      <span className={`${styles.dataInfo} ${styles.status}`}>
        Activo
      </span>
    </div>
  );
}

export default Group_tres;