import { render, screen, fireEvent } from "@testing-library/react"

import useGetUserDataHook from "../../hooks/getUsersDataHook"
import DataTable from "../../components/data-table/DataTable"
jest.mock("next/navigation", () => ({
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      refresh: jest.fn(),
      prefetch: jest.fn(),
    }),
    usePathname: () => "/dashboard/users",
  }))
// Mock the custom data fetching hook
jest.mock("../../hooks/getUsersDataHook")

const mockUseGetUserDataHook = useGetUserDataHook as jest.MockedFunction<typeof useGetUserDataHook>

describe("DataTable", () => {
  const mockUsers = [
    {
      id: "1",
      organization: "Company A",
      username: "john_doe",
      email: "john@example.com",
      phoneNumber: "123456789",
      dateJoined: "2023-01-01",
      status: "Active",
    },
  ]

  const mockMeta = {
    totalPages: 1,
    totalCount: 1,
  }

  beforeEach(() => {
    mockUseGetUserDataHook.mockReturnValue({
      usersData: mockUsers,
      meta: mockMeta,
      isGettingUsersData: false,
      isError: false,
      error: null,
    } as any)
  })

  it("renders table headers and rows correctly", () => {
    render(<DataTable />)

    expect(screen.getByText("ORGANIZATION")).toBeInTheDocument()
    expect(screen.getByText("USERNAME")).toBeInTheDocument()
    expect(screen.getByText("EMAIL")).toBeInTheDocument()
    expect(screen.getByText("PHONE NUMBER")).toBeInTheDocument()
    expect(screen.getByText("DATE JOINED")).toBeInTheDocument()
    expect(screen.getByText("STATUS")).toBeInTheDocument()

    expect(screen.getByText("john_doe")).toBeInTheDocument()
    expect(screen.getByText("john@example.com")).toBeInTheDocument()
    expect(screen.getByText("123456789")).toBeInTheDocument()
    expect(screen.getByText("2023-01-01")).toBeInTheDocument()
    expect(screen.getByText("Active")).toBeInTheDocument()
  })

  it("opens filter form when filter button is clicked", () => {
    render(<DataTable />)

    const filterButton = screen.getByText(/filter/i)
    fireEvent.click(filterButton)

    expect(screen.getByText(/submit/i)).toBeInTheDocument()
  })

  it("shows loading state", () => {
    mockUseGetUserDataHook.mockReturnValueOnce({
      usersData: [],
      meta: mockMeta,
      isGettingUsersData: true,
      isError: false,
      error: null,
    } as any)

    render(<DataTable />)

    expect(screen.getByText("Loading data...")).toBeInTheDocument()
  })

  it("handles error state", () => {
    mockUseGetUserDataHook.mockReturnValueOnce({
      usersData: [],
      meta: null,
      isGettingUsersData: false,
      isError: true,
      error: { message: "Network error" },
    } as any)

    render(<DataTable />)

    expect(screen.getByText(/error loading data/i)).toBeInTheDocument()
    expect(screen.getByText(/network error/i)).toBeInTheDocument()
  })
})
