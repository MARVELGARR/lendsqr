import type React from "react"
import { UsersIcon, ActiveUsersIcon, UsersWithLoansIcon, UsersWithSavingsIcon } from "./icons"

export type CardType = "users" | "activeUsers" | "usersWithLoans" | "usersWithSavings"

type CardDataType = {
  [key in CardType]: {
    title: string
    icon: React.FC
    color: string
  }
}

export const cardData: CardDataType = {
  users: {
    title: "USERS",
    icon: UsersIcon,
    color: "#df18ff",
  },
  activeUsers: {
    title: "ACTIVE USERS",
    icon: ActiveUsersIcon,
    color: "#5718ff",
  },
  usersWithLoans: {
    title: "USERS WITH LOANS",
    icon: UsersWithLoansIcon,
    color: "#f55f44",
  },
  usersWithSavings: {
    title: "USERS WITH SAVINGS",
    icon: UsersWithSavingsIcon,
    color: "#ff3366",
  },
}
