import type React from "react"
import StatCard from "./StatCard"
import styles from "./statCardGrid.module.scss"
import type { CardType } from "./cardData"

interface StatCardGridProps {
  stats: {
    type: CardType
    value: string | number
  }[]
  className?: string
}

const StatCardGrid: React.FC<StatCardGridProps> = ({ stats, className }) => {
  return (
    <div  className={`${styles.grid} ${className || ""}`}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.gridItem}>
          <StatCard type={stat.type} value={stat.value} />
        </div>
      ))}
    </div>
  )
}

export default StatCardGrid
