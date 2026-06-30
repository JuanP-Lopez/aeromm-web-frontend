import styles from "./user-badge.module.css";

export default function UserBadge({ imgUrl, user }) {
     const image = imgUrl || "/Profile.jpg";

    return (
        <div className={styles.badge}>
            <img src={image} alt="Foto usuario" className={styles.userPfp}/>
            <span className={styles.user}>{user}</span>
        </div>
    );
}