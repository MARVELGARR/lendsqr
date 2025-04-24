import styles from '../landing-page.module.scss';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Marvellous Obatale</h1>
      <p className={styles.subtitle}>Take home assignment</p>
      <div className={styles.buttons}>
        <Link href="/Dashboard" className={styles.buttonPrimary}>
          Go to Dashboard
        </Link>
        <Link href="/login" className={styles.buttonSecondary}>
          Login
        </Link>
      </div>
    </div>
  );
}
