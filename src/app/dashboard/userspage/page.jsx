"use client"

import React from "react";
import { useState } from "react";
import Link from "next/link";

import styles from "./users.module.css";
import UserCard from "../../../../components/user-card/user-card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter, faPlusSquare, faClose, faEnvelope} from "@fortawesome/free-solid-svg-icons";

function GroupSystem() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>Administrar usuarios</h2>
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
            
        </div>
      </div>

      <div className={styles.groupsContainer}>

        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />

      </div>
    </div>
  );
}

export default GroupSystem;
