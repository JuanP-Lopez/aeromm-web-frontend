{/*
<p>{name}</p>
<p>{id}</p>
<p>{members}</p>
<p>{status}</p>
*/}
import styles from "./groups.module.css";

function Group({ imgGroup, name, id, members, status }) {
  return (
    <div className={styles.data}>
      <span className={styles.dataInfo}>
        <div className={styles.dataMain}>
          <img src="/prueba.png" alt="N" className={styles.groupIcon} />

          <div className={styles.dataName}>
            <span>RR.HH</span>
            <span className={styles.sub}>Creado hace 3hrs.</span>
          </div>
        </div>
      </span>

      <span className={styles.dataInfo}>2453</span>
      <span className={styles.dataInfo}>14</span>

      <span className={`${styles.dataInfo} ${styles.status}`}>
        Activo
      </span>
    </div>
  );
}

export default Group;