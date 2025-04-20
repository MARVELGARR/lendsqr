"use client"

import { useState, useEffect } from "react"

type SetValue<T> = T | ((val: T) => T)

/**
 * Custom hook for managing state in localStorage
 * @param key The localStorage key
 * @param initialValue The initial value (or function that returns the initial value)
 * @returns A stateful value and a function to update it (like useState)
 */
function useLocalStorage<T>(key: string, initialValue: T): [T, (value: SetValue<T>) => void] {
  // Get from localStorage then parse stored json or return initialValue
  const readValue = (): T => {
    // Prevent build error "window is undefined" but keep working
    if (typeof window === "undefined") {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  }

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue)

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value: SetValue<T>) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value

      // Save state
      setStoredValue(valueToStore)

      // Save to localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))

        // Dispatch a custom event so other instances of useLocalStorage with the same key can stay in sync
        window.dispatchEvent(new Event("local-storage"))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  // Listen for changes to this localStorage key in other documents/tabs
  useEffect(() => {
    const handleStorageChange = () => {
      setStoredValue(readValue())
    }

    // this only works for other documents, not the current one
    window.addEventListener("storage", handleStorageChange)
    // this is a custom event, triggered in setValue
    window.addEventListener("local-storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("local-storage", handleStorageChange)
    }
  }, [])

  return [storedValue, setValue]
}

export default useLocalStorage
