"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "./fastsend.module.css";

function FastSend() {
    return (
        <div className={styles.main}>
            <form action="" className={styles.formContainer}>
                <div className={styles.templates}>
                    <h3>Plantillas</h3>
                    <span>Selecciona la plantilla que quieres usar para tu correo</span>

                    <div className={styles.templatesContainer}>

                        <div className={styles.radioContainer}> 
                            <input type="radio" name="template" id="" className={styles.templateSelector}/>
                            <img src="/fondo.jpg" alt="" className={styles.templateImg}/>
                        </div>
                        
                        <div className={styles.radioContainer}> 
                            <input type="radio" name="template" id="" className={styles.templateSelector}/>
                            <img src="/fondo.jpg" alt="" className={styles.templateImg}/>
                        </div>

                        <div className={styles.radioContainer}> 
                            <input type="radio" name="template" id="" className={styles.templateSelector}/>
                            <img src="/fondo.jpg" alt="" className={styles.templateImg}/>
                        </div>

                    </div>
                    
                </div>

                <div className={styles.form}>

                    <label htmlFor="subject">Asunto
                    <input type="text" name="subject" id="subject" />
                    </label>

                    <label htmlFor="addressee">Destinatario
                    <input type="text" name="addressee" id="addressee" />
                    </label>

                    <label htmlFor="body-1">Párrafo 1
                    <textarea type="text" name="body-1" id="body-1" />
                    </label>

                    <label htmlFor="body-2">Párrafo 2
                    <textarea type="text" name="body-2" id="body-2" />
                    </label>
                    
                    <label htmlFor="file">Archivo adjunto
                    <input type="file" name="file" id="file" />
                    </label>

                    <input type="submit" value="Enviar" />

                </div>
            </form>
        </div>
    );
}

export default FastSend;