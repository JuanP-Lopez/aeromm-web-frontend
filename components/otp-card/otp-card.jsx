import styles from "./otp-card.module.css";

export default function OTPCard() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.otp_container}>
        <span className={styles.action}>
          Ingresa el código para confirmar tu cuenta
        </span>

        <div className={styles.otp_entries}>
            <input type="text" name="" id="" className={styles.input} pattern="[0-9]*" maxLength={1}/>
            <input type="text" name="" id="" className={styles.input} pattern="[0-9]*" maxLength={1}/>
            <input type="text" name="" id="" className={styles.input} pattern="[0-9]*" maxLength={1}/>
            <input type="text" name="" id="" className={styles.input} pattern="[0-9]*" maxLength={1}/>
            <input type="text" name="" id="" className={styles.input} pattern="[0-9]*" maxLength={1}/>
            <input type="text" name="" id="" className={styles.input} pattern="[0-9]*" maxLength={1}/>
        </div>
        <span className={styles.span}>¿No recibiste el código? <button className={styles.button}>Reenviar código.</button></span>

        <button type="submit" className={styles.submit}>Confirmar código</button>
      </div>
    </main>
  );
}
