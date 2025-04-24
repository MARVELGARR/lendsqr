import styles from '../landing-page.module.scss';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our App</h1>
      <p className={styles.subtitle}>Your gateway to productivity</p>
      <div className={styles.buttons}>
        <Link href="/dashboard" className={styles.buttonPrimary}>
          Go to Dashboard
        </Link>
        <Link href="/login" className={styles.buttonSecondary}>
          Login
        </Link>
      </div>
    </div>
  );
}
