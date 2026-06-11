import { getCurrentAdmin } from "../../../services/auth.service";
import { getSendedEmails } from "../../../services/auth.service";

import EmailBadge from "../../../../components/email-badge/email-badge";
import styles from "./profile.module.css";

export default async function ProfilePage() {

  const admin = await getCurrentAdmin();

  const emails = await getSendedEmails();


  console.log("Profile page:", admin);
  console.log("Emails: ", emails);
  console.log("Tipo:", typeof emails);
  console.log("Es array:", Array.isArray(emails));

  return (
    <main className={styles.mainContainer}>
      <div className={styles.user}>
        <img src={admin.pfpUrl} alt="perfil" className={styles.profileImg} />
        <span className={styles.username}>{admin.nombre}</span>
        <textarea
          type="textarea"
          rows={4}
          cols={50}
          className={styles.description}
          placeholder="Descripción del usuario"
        />
      </div>

      <div className={styles.lastEmails}>

        {
          emails.emails.map((email) => {
            return (
              <EmailBadge
              key={email.id}
              sender={email.nombre}
              addressee={email.nombre_grupo}
              date={email.fecha_envio}
              />
            );
          })
        }
        
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
