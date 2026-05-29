import React from "react";
import { supabase } from "../../../lib/db";

import Log from "../../../../components/log-card/log-card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faUsersGear, faEnvelope, faQuestion, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import styles from "./logs.module.css";

export default async function LogsPage(){

    const { data: logs, error: logsError } = await supabase.from("historial_usuarios").select("*").eq("id_usuario", 31);

    if (logsError) {
        return <div className={styles.errorContainer}>
                    <FontAwesomeIcon icon={faExclamationTriangle} className={styles.errorIcon}/>
                    <p className={styles.error}>Error cargando historial</p>
                    <FontAwesomeIcon icon={faExclamationTriangle} className={styles.errorIcon}/>
                </div>
    }

    return(
        <div className={styles.main}>
            {/* Incluir funcionalidad renderizado de historial en 
                Base de datos con estructura map()
                JSON para conseguir icono en base al tipo de accion: 
                    Email - faEnvelope; NewUser - faUserPlus; NewGroup - faUsersGear
            */}

            {
                logs.map((log) => (
                    <div key={log.id_log}>
                    {log.tipo === 'Email' ? (
                        <Log Icon={faEnvelope} Type={log.tipo} Action={log.accion} Date={log.fecha_registro}/>
                    ) : log.tipo === 'NewUser' ? (
                        <Log Icon={faUserPlus} Type={log.tipo} Action={log.accion} Date={log.fecha_registro}/>
                    ) : log.tipo === 'NewGroup' ? (
                        <Log Icon={faUsersGear} Type={log.tipo} Action={log.accion} Date={log.fecha_registro}/>
                    ) : (
                        <Log Icon={faQuestion} Type={log.tipo} Action={log.accion} Date={log.fecha_registro}/>
                    )}
                    </div>
                ))
            }
        </div>
    );
}