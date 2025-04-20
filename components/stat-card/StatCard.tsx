import type React from "react"
import styles from "./statCard.module.scss"
import { cardData, type CardType } from "./cardData"

interface StatCardProps {
  type: CardType
  value: string | number
  className?: string
}

const StatCard: React.FC<StatCardProps> = ({ type, value, className }) => {
  const card = cardData[type]

  return (
    <div className={`${styles.card} ${className || ""}`}>
      <div className={`${styles.iconContainer} ${styles[`icon${type}`]}`}>
        <card.icon />
      </div>
      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.value}>{value.toLocaleString()}</p>
    </div>
  )
}

export default StatCard
