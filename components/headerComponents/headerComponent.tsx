"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { BellIcon, SearchIcon, ChevronDownIcon } from "./icons"
import styles from "./headerComponent.module.scss"
import { IoIosNotificationsOutline } from "react-icons/io"
import { Doc } from "../../styles/fonts"

export default function HeaderComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header data-testid="application-header" className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image src="/images/lendsqr-logo.svg" alt="Lendsqr Logo" width={170} height={36} priority />
          </Link>
        </div>

        <div className={styles.searchContainer}>
          <div className={styles.searchInputWrapper}>
            <input type="text" placeholder="Search for anything" className={styles.searchInput} aria-label="Search" />
            <button className={styles.searchButton} aria-label="Submit search">
              <SearchIcon />
            </button>
          </div>
        </div>

        <div className={styles.navContainer}>
          <Link style={Doc.style} href="/docs" className={styles.docsLink}>
            Docs
          </Link>

          <button className={styles.notificationButton} aria-label="Notifications">
            <BellIcon className={styles.notificationIcon} />
          </button>

          <div className={styles.profileContainer} ref={dropdownRef}>
            <button className={styles.profileButton} onClick={toggleDropdown}>
              <div className={styles.avatarContainer}>
                <Image src="/images/avatar.png" alt="User avatar" width={40} height={40} className={styles.avatar} />
              </div>
              <span className={styles.username}>Adedeji</span>
              <ChevronDownIcon className={isDropdownOpen ? styles.chevronUp : styles.chevronDown} />
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdown}>
                <ul className={styles.dropdownMenu}>
                  <li>
                    <Link href="/profile">Profile</Link>
                  </li>
                  <li>
                    <Link href="/settings">Settings</Link>
                  </li>
                  <li>
                    <Link href="/login">Logout</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
