"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import styles from "./login-form.module.scss";

// Define the validation schema with Zod
const loginSchema = z.object({
  email:  z
  .string()
  .min(1, { message: "Email is required" })
  .email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" }),
});

// Infer the type from the schema
export type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      console.log("Form data submitted:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Handle successful login here
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      data-testid="login-form"
      noValidate
    >
      <div className={styles.formGroup}>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            id="email"
            placeholder="Email"
            className={`${styles.input} ${
              errors.email ? styles.inputError : ""
            }`}
            {...register("email")}
            data-testid="email-input"
            
          />
          {errors.email && (
            <span className={styles.errorMessage} data-testid="email-error">
              {errors.email.message}
            </span>
          )}
        </div>
      </div>

      <div className={styles.formGroup}>
        <div className={styles.inputWrapper}>
          <div className={styles.passwordContainer}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className={`${styles.input} ${
                errors.password ? styles.inputError : ""
              }`}
              {...register("password")}
              data-testid="password-input"
            />
            <button
              type="button"
              className={styles.showPasswordButton}
              onClick={togglePasswordVisibility}
              data-testid="toggle-password"
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>
          {errors.password && (
            <span className={styles.errorMessage} data-testid="password-error">
              {errors.password.message}
            </span>
          )}
        </div>
      </div>

      <div className={styles.forgotPasswordContainer}>
        <Link href="/forgot-password" className={styles.forgotPasswordLink}>
          FORGOT PASSWORD?
        </Link>
      </div>

      <button
        type="submit"
        className={styles.loginButton}
        disabled={isSubmitting}
        data-testid="login-button"
      >
        {isSubmitting ? "LOGGING IN..." : "LOG IN"}
      </button>
    </form>
  );
}
