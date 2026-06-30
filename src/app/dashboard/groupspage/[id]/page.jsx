import { getGroup } from "../../../../services/group.service";
import { getUsers } from "../../../../services/group.service";

import UserBadge from "../../../../../components/user-badge/user-badge";
import EmailBadge from "../../../../../components/email-badge/email-badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faUserGroup } from "@fortawesome/free-solid-svg-icons"
import styles from "./infogrouppage.module.css";

export default async function GroupId({ params }) {
    const { id } = await params;
    console.log("ID: ", id);

    const group =  await getGroup(id);
    console.log(group);

    const users = await getUsers(id);
    console.log("Salida en componente: ", users);
    return (
        <main>
            <div className={styles.main}>
            <div className={styles.gridContainer}>
            <div className={styles.info}>
                <img src={group.assetUrl} alt="Foto del grupo" className={styles.groupPhoto}/>
                <h3 className={styles.groupName}>{group.groupData.nombre_grupo}</h3>

                <div className={styles.subInfo}>
                    <span>Activo</span>
                    <span><FontAwesomeIcon icon={faUserGroup}/>Numero de miembros: </span>
                </div>

                <span className={styles.description}>{group.groupData.descripcion}
                    </span>
            </div>

            <div className={styles.center}>

            <div className={styles.users}>
                <span className={styles.span}>Miembros del grupo:</span>
                <div className={styles.usersContainer}>
                    {users.users.map((user) => {
                        return(
                            <UserBadge
                                key={user.user.correo}
                                imgUrl={user.pfp}
                                user={user.user.nombre}
                            />
                        );
                    })}
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
        </main>
    )
}