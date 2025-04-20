import { JSX } from "react";
import styles from "./dashboardCard.module.scss";

interface DashboardCardProps {
  title: string;
  count: string;
  icon: JSX.Element;
}

const DashboardCard = ({
  title,
  count,
  icon,
}: DashboardCardProps) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>{icon}</div>
        <div className={styles.cardText}>
          <h3>{title}</h3>
          <p>{count}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;