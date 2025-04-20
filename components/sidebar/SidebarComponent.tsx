"use client"

import { useState } from "react"
import Link from "next/link"
import { sidebarData } from "./sidebarData"
import { ChevronDownIcon, LogoutIcon } from "./icons"
import styles from "./sidebarComponent.module.scss"

export default function SidebarComponent() {
  const [isOpen, setIsOpen] = useState(true)
  const [activeItem, setActiveItem] = useState("Users")

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName)
  }

  return (
    <>
      {/* Mobile overlay */}
      {!isOpen && <div className={styles.overlay} onClick={toggleSidebar} />}

      {/* Mobile toggle button */}
      <button
        className={styles.mobileToggle}
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarContent}>
          {/* Organization Switcher */}
          <div className={styles.orgSwitcher}>
            <div className={styles.orgIcon}>
              <sidebarData.icons.Organization />
            </div>
            <span>Switch Organization</span>
            <ChevronDownIcon className={styles.chevronIcon} />
          </div>

          {/* Dashboard Link */}
          <Link
            href="/dashboard"
            className={`${styles.menuItem} ${activeItem === "Dashboard" ? styles.active : ""}`}
            onClick={() => handleItemClick("Dashboard")}
          >
            <div className={styles.menuIcon}>
              <sidebarData.icons.Dashboard />
            </div>
            <span>Dashboard</span>
          </Link>

          {/* Menu Sections */}
          {sidebarData.sections.map((section) => (
            <div key={section.title} className={styles.menuSection}>
              <h3 className={styles.sectionTitle}>{section.title}</h3>
              <ul className={styles.menuList}>
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`${styles.menuItem} ${activeItem === item.name ? styles.active : ""}`}
                      onClick={() => handleItemClick(item.name)}
                    >
                      <div className={styles.menuIcon}>{item.icon}</div>
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Logout */}
          <div className={styles.sidebarFooter}>
            <Link href="/logout" className={styles.logoutButton}>
              <div className={styles.menuIcon}>
                <LogoutIcon />
              </div>
              <span>Logout</span>
            </Link>
            <div className={styles.versionInfo}>v1.2.0</div>
          </div>
        </div>
      </aside>
    </>
  )
}
