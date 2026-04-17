{/*
<p>{name}</p>
<p>{id}</p>
<p>{members}</p>
<p>{status}</p>
*/}
import styles from "./groups.module.css";

function Group_dos({ imgGroup, name, id, members, status }) {
  return (
    <div className={styles.data}>
      <span className={styles.dataInfo}>
        <div className={styles.dataMain}>
          <img src="/prueba_dos.png" alt="N" className={styles.groupIcon} />

          <div className={styles.dataName}>
            <span>Ventas</span>
            <span className={styles.sub}>Creado hace 2m.</span>
          </div>
        </div>
      </span>

      <span className={styles.dataInfo}>2309</span>
      <span className={styles.dataInfo}>8</span>

      <span className={`${styles.dataInfo} ${styles.status}`}>
        Activo
      </span>
    </div>
  );
}

export default Group_dos;