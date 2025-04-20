"use client"

import { useState, useMemo } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
  type SortingState,
  type ColumnDef,
  type FilterFn,
} from "@tanstack/react-table"
import { z } from "zod"
import FilterForm from "./FilterForm"
import ActionMenu from "./ActionMenu"
import { SortIcon } from "./icons"
import { type User, userData } from "./data"
import styles from "./dataTable.module.scss"

// Define the filter schema with Zod
export const filterSchema = z.object({
  organization: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
  date: z.string().optional(),
  status: z.string().optional(),
})

export type FilterValues = z.infer<typeof filterSchema>

export default function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [globalFilter, setGlobalFilter] = useState<FilterValues>({})

  // Custom filter function that checks all fields
  const fuzzyFilter: FilterFn<User> = (row, columnId, filterValue: FilterValues) => {
    // If no filter values are set, show all rows
    if (Object.values(filterValue).every((val) => !val)) return true

    const user = row.original

    // Check each filter field
    if (filterValue.organization && !user.organization.toLowerCase().includes(filterValue.organization.toLowerCase())) {
      return false
    }
    if (filterValue.username && !user.username.toLowerCase().includes(filterValue.username.toLowerCase())) {
      return false
    }
    if (filterValue.email && !user.email.toLowerCase().includes(filterValue.email.toLowerCase())) {
      return false
    }
    if (filterValue.phoneNumber && !user.phoneNumber.includes(filterValue.phoneNumber)) {
      return false
    }
    if (filterValue.date && !user.dateJoined.includes(filterValue.date)) {
      return false
    }
    if (filterValue.status && user.status !== filterValue.status) {
      return false
    }

    return true
  }

  // Define columns
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "organization",
        header: ({ column }) => (
          <div className={styles.columnHeader} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            ORGANIZATION
            <SortIcon />
          </div>
        ),
        cell: ({ row }) => <div className={styles.cell}>{row.original.organization}</div>,
      },
      {
        accessorKey: "username",
        header: ({ column }) => (
          <div className={styles.columnHeader} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            USERNAME
            <SortIcon />
          </div>
        ),
        cell: ({ row }) => <div className={styles.cell}>{row.original.username}</div>,
      },
      {
        accessorKey: "email",
        header: ({ column }) => (
          <div className={styles.columnHeader} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            EMAIL
            <SortIcon />
          </div>
        ),
        cell: ({ row }) => <div className={styles.cell}>{row.original.email}</div>,
      },
      {
        accessorKey: "phoneNumber",
        header: ({ column }) => (
          <div className={styles.columnHeader} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            PHONE NUMBER
            <SortIcon />
          </div>
        ),
        cell: ({ row }) => <div className={styles.cell}>{row.original.phoneNumber}</div>,
      },
      {
        accessorKey: "dateJoined",
        header: ({ column }) => (
          <div className={styles.columnHeader} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            DATE JOINED
            <SortIcon />
          </div>
        ),
        cell: ({ row }) => <div className={styles.cell}>{row.original.dateJoined}</div>,
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <div className={styles.columnHeader} onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            STATUS
            <SortIcon />
          </div>
        ),
        cell: ({ row }) => (
          <div className={styles.cell}>
            <span className={`${styles.statusBadge} ${styles[row.original.status.toLowerCase()]}`}>
              {row.original.status}
            </span>
          </div>
        ),
      },
      {
        id: "actions",
        cell: ({ row }) => (
          <div className={styles.actionsCell}>
            <ActionMenu userId={row.original.id} />
          </div>
        ),
      },
    ],
    [],
  )

  const table = useReactTable({
    data: userData,
    columns,
    state: {
      sorting,
      globalFilter,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: fuzzyFilter,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  })

  const handleFilterSubmit = (values: FilterValues) => {
    setGlobalFilter(values)
    setIsFilterOpen(false)
  }

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <button className={styles.filterButton} onClick={toggleFilter}>
          Filter
        </button>
        {isFilterOpen && <FilterForm onSubmit={handleFilterSubmit} onClose={() => setIsFilterOpen(false)} />}
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={styles.th}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={styles.tr}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles.td}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <div className={styles.paginationInfo}>
          <span>Showing</span>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value))
            }}
            className={styles.pageSizeSelect}
          >
            {[10, 20, 30, 40, 50, 100].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>
          <span>out of {table.getFilteredRowModel().rows.length}</span>
        </div>

        <div className={styles.paginationControls}>
          <button
            className={styles.paginationButton}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            &lt;
          </button>
          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1)
            .filter((page) => {
              const currentPage = table.getState().pagination.pageIndex + 1
              return page === 1 || page === table.getPageCount() || (page >= currentPage - 1 && page <= currentPage + 1)
            })
            .map((page, i, array) => {
              const currentPage = table.getState().pagination.pageIndex + 1
              // Add ellipsis
              if (i > 0 && array[i - 1] !== page - 1) {
                return (
                  <span key={`ellipsis-${page}`} className={styles.ellipsis}>
                    ...
                  </span>
                )
              }
              return (
                <button
                  key={page}
                  className={`${styles.pageNumber} ${currentPage === page ? styles.activePage : ""}`}
                  onClick={() => table.setPageIndex(page - 1)}
                >
                  {page}
                </button>
              )
            })}
          <button
            className={styles.paginationButton}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  )
}
