import EmailBadge from "../../../../components/email-badge/email-badge";

import styles from "./infouser.module.css";

export default function InfoUser({/* userID */}) {
    return (
        <div className={styles.mainContainer}>

            <div className={styles.user}>
                <img src="/profile.jpg" alt="perfil" className={styles.profileImg}/>
                <span className={styles.username}>Misa L. Chicha</span>
                <span className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio, consequuntur! Ipsum voluptatum quod ab rem minima fuga 
                    officiis error eligendi alias. Distinctio reprehenderit 
                    necessitatibus officiis officia alias provident, magni delectus!</span>
            </div>

            <div className={styles.lastEmails}>
                <EmailBadge sender={"Cesar"} addressee={"Sistemas"} date={"01-06-2026"}/>
                <EmailBadge sender={"Cesar"} addressee={"Sistemas"} date={"01-06-2026"}/>
                <EmailBadge sender={"Cesar"} addressee={"Sistemas"} date={"01-06-2026"}/>
                <EmailBadge sender={"Cesar"} addressee={"Sistemas"} date={"01-06-2026"}/>
                <EmailBadge sender={"Cesar"} addressee={"Sistemas"} date={"01-06-2026"}/>
            </div>

            <div className={styles.statistics}></div>

            <div className={styles.groups}>
                <span className={styles.countTitle}>Grupos de los que <br />forma parte el usuario</span>
                <span className={styles.count}>4</span>
            </div>

            <div className={styles.templates}></div>
        </div>
    );
}