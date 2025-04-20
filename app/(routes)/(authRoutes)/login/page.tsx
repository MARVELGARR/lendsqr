"use client"

import Image from "next/image"

import styles from "./styles.module.scss"
import LoginForm from "../../../../components/auth/login-form"

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.logoContainer}>
            <Image src="/images/lendsqr-logo.svg" alt="Lendsqr Logo" width={170} height={36} priority />
          </div>
          <div className={styles.illustrationContainer}>
            <Image src="/images/pablo-sign-in.png" alt="Login Illustration" width={600} height={300} priority />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.formContainer}>
            <h1 className={styles.welcomeHeading}>Welcome!</h1>
            <p className={styles.welcomeSubtext}>Enter details to login.</p>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
