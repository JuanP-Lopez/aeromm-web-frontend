{
  /*
<p>{name}</p>
<p>{id}</p>
<p>{members}</p>
<p>{status}</p>
*/
}
import styles from "./groupsfull.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faT, faTrash } from "@fortawesome/free-solid-svg-icons";

function GroupFull({ imgGroup, name, id, members, status }) {
  return (
    <table className={styles.table}>
      <tr className={styles.tableHeader}>
        <td className={styles.data}>
          <span className={styles.dataInfo}>
            <div className={styles.dataMain}>
              <img src="/prueba.png" alt="N" className={styles.groupIcon} />
              <div className={styles.dataName}>
                <span>RR.HH</span>
                <span className={styles.sub}>Creado hace 3hrs.</span>
              </div>
            </div>
          </span>
        </td>

        <td className={styles.data}>
          <span className={styles.dataInfo}>2453</span>
        </td>

        <td className={styles.data}>
          <span className={styles.dataInfo}>14</span>
        </td>

        <td className={styles.data}>
          <span className={`${styles.dataInfo} ${styles.status}`}>Activo</span>
        </td>

        <td className={styles.data}>
          <input type="checkbox" name="" id="" />
          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
        </td>
      </tr>
    </table>
  );
}

export default GroupFull;
