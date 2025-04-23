"use client"

import { render, screen, fireEvent, cleanup } from "@testing-library/react"

import { useUserStore } from "../../store/userStore"
import { act } from "react"
import UserProfileHeader from "../../components/user-profile/UserProfileHeader"

// Create a mock user to populate localStorage
const mockUsers = [
  {
    id: "user123",
    userId: "U123456",
    avatar: "",
    personalInfo: {
      fullName: "Marvellous Obatale",
    },
    accountBalance: 50000,
    bankInfo: {
      accountNumber: "0123456789",
      bankName: "Zenith Bank",
    },
  },
]

describe("UserProfileHeader (integration)", () => {
  beforeEach(() => {
    localStorage.setItem("users", JSON.stringify(mockUsers))

    // Reset Zustand store
    const { setActiveTab } = useUserStore.getState()
    act(() => setActiveTab("general"))
  })

  afterEach(() => {
    cleanup()
    localStorage.clear()
  })

  it("renders correct user info", () => {
    render(<UserProfileHeader userId="user123" />)

    expect(screen.getByText("Marvellous Obatale")).toBeInTheDocument()
    expect(screen.getByText("U123456")).toBeInTheDocument()
    expect(screen.getByText("₦50,000")).toBeInTheDocument()
    expect(screen.getByText("0123456789/Zenith Bank")).toBeInTheDocument()
  })

  it("changes tab on click and highlights active tab", () => {
    render(<UserProfileHeader userId="user123" />)

    const loansTab = screen.getByRole("button", { name: /loans/i })
    fireEvent.click(loansTab)

    const { activeTab } = useUserStore.getState()
    expect(activeTab).toBe("loans")

    // Optionally test style class (if you expose it via data-testid or similar)
    expect(loansTab.className).toMatch(/activeTab/)
  })

  it("shows fallback if user is not found", () => {
    render(<UserProfileHeader userId="unknown-id" />)
    expect(screen.getByText("User not found")).toBeInTheDocument()
  })
})
