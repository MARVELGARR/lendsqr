import { render, screen } from "@testing-library/react"
import LoginPage from "@/app/(routes)/(authRoutes)/login/page"

// Mock the next/image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} src={props.src || "/placeholder.svg"} alt={props.alt} />
  },
}))

// Mock the login form component
jest.mock("@/components/auth/login-form", () => {
  return {
    __esModule: true,
    default: () => <div data-testid="mocked-login-form">Login Form</div>,
  }
})

describe("LoginPage", () => {
  it("renders the login page correctly", () => {
    render(<LoginPage />)

    // Check for the logo
    expect(screen.getByAltText("Lendsqr Logo")).toBeInTheDocument()

    // Check for the illustration
    expect(screen.getByAltText("Login Illustration")).toBeInTheDocument()

    // Check for the welcome text
    expect(screen.getByText("Welcome!")).toBeInTheDocument()
    expect(screen.getByText("Enter details to login.")).toBeInTheDocument()

    // Check for the login form
    expect(screen.getByTestId("mocked-login-form")).toBeInTheDocument()
  })
})
