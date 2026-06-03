import EmailBadge from "../../../../components/email-badge/email-badge";
import styles from "./profile.module.css";

function ProfilePage({/* userID */}) {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.user}>
        <img src="/profile.jpg" alt="perfil" className={styles.profileImg} />
        <span className={styles.username}>Cesar Soto</span>
        <textarea
          type="textarea"
          rows={4}
          cols={50}
          className={styles.description}
          placeholder="Descripción del usuario"
        />
      </div>

      <div className={styles.lastEmails}>
        <EmailBadge
          sender={"Cesar"}
          addressee={"Sistemas"}
          date={"01-06-2026"}
        />
        <EmailBadge
          sender={"Cesar"}
          addressee={"Sistemas"}
          date={"01-06-2026"}
        />
        <EmailBadge
          sender={"Cesar"}
          addressee={"Sistemas"}
          date={"01-06-2026"}
        />
        <EmailBadge
          sender={"Cesar"}
          addressee={"Sistemas"}
          date={"01-06-2026"}
        />
        <EmailBadge
          sender={"Cesar"}
          addressee={"Sistemas"}
          date={"01-06-2026"}
        />
      </div>

      <div className={styles.statistics}></div>

      <div className={styles.groups}>
        <span className={styles.countTitle}>
          Grupos creados
        </span>
        <span className={styles.count}>4</span>
      </div>

      <div className={styles.templates}></div>
    </main>
  );
}

export default ProfilePage;
