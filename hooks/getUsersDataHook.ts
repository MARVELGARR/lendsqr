import { useQuery, keepPreviousData } from "@tanstack/react-query"
import { generateUsers } from "../store/userData"


// Define the parameters type for pagination and filtering
export interface UsersQueryParams {
  page: number
  pageSize: number
  sortBy?: string
  sortOrder?: "asc" | "desc"
  filters?: Record<string, any>
}

// Function to fetch paginated data
const fetchUsers = async ({ page, pageSize, sortBy, sortOrder, filters }: UsersQueryParams) => {
  // In a real app, this would be an API call with query parameters
  // For this example, we'll simulate server pagination with our generateUsers function

  const allUsers = generateUsers(500)

  // Apply filters if any
  let filteredUsers = allUsers
  if (filters) {
    filteredUsers = allUsers.filter((user) => {
      return Object.entries(filters).every(([key, value]) => {
        if (!value) return true // Skip empty filters

        const userValue = key.includes(".") ? key.split(".").reduce((obj, k) => obj?.[k], user) : user[key]

        return String(userValue).toLowerCase().includes(String(value).toLowerCase())
      })
    })
  }

  // Apply sorting if specified
  if (sortBy) {
    filteredUsers = [...filteredUsers].sort((a, b) => {
      const aValue = sortBy.includes(".") ? sortBy.split(".").reduce((obj, k) => obj?.[k], a) : a[sortBy]
      const bValue = sortBy.includes(".") ? sortBy.split(".").reduce((obj, k) => obj?.[k], b) : b[sortBy]

      if (aValue < bValue) return sortOrder === "desc" ? 1 : -1
      if (aValue > bValue) return sortOrder === "desc" ? -1 : 1
      return 0
    })
  }

  // Calculate pagination
  const totalCount = filteredUsers.length
  const totalPages = Math.ceil(totalCount / pageSize)
  const startIndex = page * pageSize
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize)

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300))

  return {
    data: paginatedUsers,
    meta: {
      totalCount,
      totalPages,
      currentPage: page,
      pageSize,
    },
  }
}

const useGetUserDataHook = (params: UsersQueryParams) => {
  const { data, isLoading, isError, error,  } = useQuery({
    queryKey: ["usersData", params],
    queryFn: () => fetchUsers(params),
    placeholderData: keepPreviousData, // Keep previous data while fetching new data
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
  })

  return {
    usersData: data?.data || [],
    meta: data?.meta,
    isGettingUsersData: isLoading,
    isError,
    error
  }
}

export default useGetUserDataHook
