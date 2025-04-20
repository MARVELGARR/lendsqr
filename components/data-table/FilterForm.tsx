"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { filterSchema, type FilterValues } from "./DataTable"
import { CalendarIcon, ChevronDownIcon } from "./icons"
import styles from "./filterForm.module.scss"

interface FilterFormProps {
  onSubmit: (values: FilterValues) => void
  onClose: () => void
}

export default function FilterForm({ onSubmit, onClose }: FilterFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      organization: "",
      username: "",
      email: "",
      phoneNumber: "",
      date: "",
      status: "",
    },
  })

  const handleReset = () => {
    reset()
  }

  return (
    <div className={styles.filterFormContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.filterForm}>
        <div className={styles.formGroup}>
          <label htmlFor="organization" className={styles.label}>
            Organization
          </label>
          <div className={styles.selectWrapper}>
            <select id="organization" {...register("organization")} className={styles.select}>
              <option value="">Select</option>
              <option value="Lendsqr">Lendsqr</option>
              <option value="Lendstar">Lendstar</option>
              <option value="Irorun">Irorun</option>
            </select>
            <ChevronDownIcon className={styles.selectIcon} />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>
            Username
          </label>
          <input id="username" type="text" placeholder="User" {...register("username")} className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input id="email" type="text" placeholder="Email" {...register("email")} className={styles.input} />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="date" className={styles.label}>
            Date
          </label>
          <div className={styles.dateInputWrapper}>
            <input id="date" type="date" {...register("date")} className={styles.input} placeholder="Date" />
            <CalendarIcon className={styles.calendarIcon} />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phoneNumber" className={styles.label}>
            Phone Number
          </label>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Phone Number"
            {...register("phoneNumber")}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status" className={styles.label}>
            Status
          </label>
          <div className={styles.selectWrapper}>
            <select id="status" {...register("status")} className={styles.select}>
              <option value="">Select</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Blacklisted">Blacklisted</option>
            </select>
            <ChevronDownIcon className={styles.selectIcon} />
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <button type="button" onClick={handleReset} className={styles.resetButton}>
            Reset
          </button>
          <button type="submit" className={styles.filterButton}>
            Filter
          </button>
        </div>
      </form>
    </div>
  )
}
