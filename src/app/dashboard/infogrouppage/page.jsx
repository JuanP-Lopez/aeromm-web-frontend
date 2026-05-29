import UserBadge from "../../../../components/user-badge/user-badge";
import EmailBadge from "../../../../components/email-badge/email-badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import styles from "./infogrouppage.module.css";

function InfoGroup() {
    return (
        <div className={styles.main}>
            <div className={styles.gridContainer}>
            <div className={styles.info}>
                <img src="/header.png" alt="Foto del grupo" className={styles.groupPhoto}/>
                <h3 className={styles.groupName}>Nombre del grupo</h3>

                <div className={styles.subInfo}>
                    <span>Activo</span>
                    <span><FontAwesomeIcon icon={faUserGroup}/>Numero de miembros: </span>
                </div>

                <span className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quod id praesentium unde doloremque odio ipsum excepturi at 
                    ut assumenda alias enim laboriosam, maxime impedit sint totam natus ab. 
                    Fuga, obcaecati.
                    </span>
            </div>

            <div className={styles.center}>

            <div className={styles.users}>
                <span className={styles.span}>Miembros del grupo:</span>
                <div className={styles.usersContainer}>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                    <UserBadge imgUrl={"/profile.jpg"} user={"Yael"}/>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.span} htmlFor="newMember">Añadir miembro:</label>
                    <input type="email" name="newMember" id="newMember" className={styles.memberInput}/>
                    <button type="submit" className="btn btn-outline-success">Añadir</button>
                </div>
            </div>

            <div className={styles.messages}>
                <div className={styles.messagesContainer}>
                    <EmailBadge sender={"Cesar"} addressee={"RR.HH"} date={"29-05-2026"}/>
                    <EmailBadge sender={"Cesar"} addressee={"RR.HH"} date={"29-05-2026"}/>
                    <EmailBadge sender={"Cesar"} addressee={"RR.HH"} date={"29-05-2026"}/>
                    <EmailBadge sender={"Cesar"} addressee={"RR.HH"} date={"29-05-2026"}/>
                    <EmailBadge sender={"Cesar"} addressee={"RR.HH"} date={"29-05-2026"}/>
                    <EmailBadge sender={"Cesar"} addressee={"RR.HH"} date={"29-05-2026"}/>
                </div>
            </div>

            </div>

            <div className={styles.graphics}>
                
                
            </div>
            </div>
        </div>
    )
}

export default InfoGroup;