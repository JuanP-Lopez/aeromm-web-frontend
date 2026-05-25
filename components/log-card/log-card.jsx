"use client";

import React from "react";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faUsersGear,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./log-card.module.css";

function Log({ Type, Action, Icon, Date }) {
  return (
    <div className={styles.logcontainer}>
      <FontAwesomeIcon icon={Icon} className={styles.icon} />
      <span className={styles.type}>{Type}</span>
      <span className={styles.action}>{Action}</span>
      <span className={styles.action}>{Date}</span>
    </div>
  );
}

export default Log;
