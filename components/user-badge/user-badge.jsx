import styles from "./user-badge.module.css";

export default function UserBadge({ imgUrl, user }) {
    return (
        <div className={styles.badge}>
            <img src={imgUrl} alt="Foto usuario" className={styles.userPfp}/>
            <span className={styles.user}>{user}</span>
        </div>
    );
}