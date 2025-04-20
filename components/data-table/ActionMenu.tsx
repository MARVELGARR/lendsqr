"use client"

import { useState, useRef, useEffect } from "react"
import { MoreIcon, ViewIcon, BlacklistIcon, ActivateIcon } from "./icons"
import styles from "./actionMenu.module.scss"
import { usePathname, useRouter } from "next/navigation"

interface ActionMenuProps {
  userId: string
}

export default function ActionMenu({ userId }: ActionMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const pathname = usePathname() 

  const router = useRouter()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleViewDetails = (id: string) => {
    router.push(`${pathname}/${id}`)
    setIsOpen(false)
  }

  const handleBlacklistUser = () => {
    console.log(`Blacklist user ${userId}`)
    setIsOpen(false)
  }

  const handleActivateUser = () => {
    console.log(`Activate user ${userId}`)
    setIsOpen(false)
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.actionMenuContainer} ref={menuRef}>
      <button className={styles.actionButton} onClick={toggleMenu} aria-label="More options">
        <MoreIcon />
      </button>

      {isOpen && (
        <div className={styles.menuDropdown}>
          <button className={styles.menuItem} onClick={()=>handleViewDetails(userId)}>
            <ViewIcon />
            <span>View Details</span>
          </button>
          <button className={styles.menuItem} onClick={handleBlacklistUser}>
            <BlacklistIcon />
            <span>Blacklist User</span>
          </button>
          <button className={styles.menuItem} onClick={handleActivateUser}>
            <ActivateIcon />
            <span>Activate User</span>
          </button>
        </div>
      )}
    </div>
  )
}
