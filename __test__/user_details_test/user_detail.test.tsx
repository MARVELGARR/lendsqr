import { render, screen } from "@testing-library/react"
import UserDetailsContent from "../../components/user-profile/UserDetailsContent"
import { useUserStore } from "../../store/userStore"
import useLocalStorage from "../../hooks/useLocalStorage"


jest.mock("../../store/userStore", () => ({
  useUserStore: jest.fn(),
}))

jest.mock("../../hooks/useLocalStorage", () => ({
  __esModule: true,
  default: jest.fn(),
}))

const mockUser = {
  id: "123",
  personalInfo: {
    fullName: "John Doe",
    phoneNumber: "123456789",
    email: "john@example.com",
    bvn: "12345678901",
    gender: "Male",
    maritalStatus: "Single",
    children: "None",
    residenceType: "Owned",
  },
  education: {
    level: "Bachelors",
    employmentStatus: "Employed",
    sector: "IT",
    duration: "3 years",
    officeEmail: "john.office@example.com",
    monthlyIncome: "₦200,000 - ₦400,000",
    loanRepayment: "₦50,000",
  },
  socials: {
    twitter: "@johndoe",
    facebook: "johndoe.fb",
    instagram: "johndoe.ig",
  },
  guarantors: [
    {
      fullName: "Jane Smith",
      phoneNumber: "987654321",
      email: "jane@example.com",
      relationship: "Sister",
    },
  ],
}

describe("UserDetailsContent", () => {
  it("renders general tab content correctly when user is found", () => {
    // Mock Zustand store
    ;(useUserStore as unknown as jest.Mock).mockReturnValue({ activeTab: "general" })

    // Mock localStorage data
    ;(useLocalStorage as jest.Mock).mockReturnValue([[mockUser]])

    render(<UserDetailsContent userId="123" />)

    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
    expect(screen.getByText(/education and employment/i)).toBeInTheDocument()
    expect(screen.getByText(/bachelors/i)).toBeInTheDocument()
    expect(screen.getByText(/@johndoe/i)).toBeInTheDocument()
    expect(screen.getByText(/jane smith/i)).toBeInTheDocument()
  })

  it("renders fallback if user is not found", () => {
    ;(useUserStore as unknown as jest.Mock).mockReturnValue({ activeTab: "general" })
    ;(useLocalStorage as jest.Mock).mockReturnValue([[/* no users */]])

    render(<UserDetailsContent userId="nonexistent-id" />)

    expect(screen.getByText(/user not found/i)).toBeInTheDocument()
  })

  it("renders tab-specific content", () => {
    ;(useUserStore as unknown as jest.Mock).mockReturnValue({ activeTab: "documents" })
    ;(useLocalStorage as jest.Mock).mockReturnValue([[mockUser]])

    render(<UserDetailsContent userId="123" />)

    expect(screen.getByText(/documents content/i)).toBeInTheDocument()
  })
})
