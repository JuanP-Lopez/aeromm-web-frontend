"use client"

import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/db";
import Link from "next/link";

import styles from "./groups.module.css";
import CreateGroup from "../../../../components/create-group/create_group";
import GroupCard from "../../../../components/group-card/group-card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter, faPlusSquare, faClose, faEnvelope} from "@fortawesome/free-solid-svg-icons";

function GroupSystem() {
  const [create, setCreate] = useState(false);

  const [ groups, setGroups ] = useState([]);

  useEffect (() => {
    async function getGroups() {
      const { data: groupsData, error: groupsError } = await supabase.from('grupos').select('*').eq('id_admin', 31);

      console.log(groupsData);

      if (groupsError) {
        console.error(groupsError);
      }

      setGroups(groupsData || []);
    }

    getGroups();
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>Grupos</h2>
      </div>

      <div className={styles.groupForm}>
        <div
          className={`${styles.createGroup} ${create ? styles.showCreateGroup : ""}`}
        >
          <CreateGroup />
        </div>
      </div>

      <div className={styles.mainOptions}>
        <div className={styles.search}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input type="text" name="" id="" className={styles.searchbar}/>
        </div>
        <div className={styles.buttons}>
            <button className="btn btn-outline-info">
              <FontAwesomeIcon icon={faFilter} className={styles.iconOptions} />
              <span>Filtrar</span>
            </button>

            <button
              className="btn btn-outline-warning"
              onClick={() => setCreate(!create)}>
              <FontAwesomeIcon
                icon={create ? faClose : faPlusSquare}
                className={styles.iconOptions}/>
              <span>{ create ? "Cerrar" : "Crear grupo"}</span>
            </button>
            
            <Link href={"/fastsendpage"} className={styles.link}>
              <button className="btn btn-outline-success">
                <FontAwesomeIcon icon={faEnvelope} className={styles.iconOptions} />
                <span>Envio rápido</span>
              </button>
            </Link>
        </div>
      </div>

      <div className={styles.groupsContainer}>

        {
          
          groups.map((group) => {
            return(
            <GroupCard key={group.id_grupo} groupName={group.nombre_grupo} membersCount={group.id_admin} status={group.id_grupo} description={group.descripcion} />
            );
          })

        }

      </div>
    </div>
  );
}

export default GroupSystem;
