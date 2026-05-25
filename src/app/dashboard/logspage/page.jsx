"use client"

import React, { useState, useEffect } from "react";
import Log from "../../../../components/log-card/log-card";

import { faUserPlus, faUsersGear, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./logs.module.css";

function LogsPage(){
    return(
        <div className={styles.main}>
            {/* Incluir funcionalidad renderizado de historial en 
                Base de datos con estructura for()
                JSON para conseguir icono en base al tipo de accion: 
                    Email - faEnvelope; NewUser - faUserPlus; NewGroup - faUsersGear
            */}
            <Log Icon={faEnvelope} Type={"Correo Enviado"} Action={"lopezdelapazpablo@gmail.com ha enviado un correo"} Date={"25/05/26"}/>
            <Log Icon={faUsersGear} Type={"Grupo creado"} Action={"lopezdelapazpablo@gmail.com ha creado el grupo RR.HH"} Date={"25/05/26"}/>
            <Log Icon={faUserPlus} Type={"Usuario Agregado"} Action={"lopezdelapazpablo@gmail.com ha agregado al usuario César"} Date={"25/05/26"}/>
        </div>
    );
}

export default LogsPage;