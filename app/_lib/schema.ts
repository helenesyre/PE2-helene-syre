import { z } from "zod";

export const LoginFormSchema = z.object({
  // Email address of the person submitting the login form
  email: z
    .email({
      message: "Invalid email address. It should include @stud.noroff.no",
    })
    .trim()
    .min(5, "Email must be at least 5 characters")
    .endsWith("@stud.noroff.no", {
      message: "Only @stud.noroff.no are allowed",
    }),
  // Password of the login form
  password: z
    .string()
    .trim()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password cannot be longer than 100 characters"),
});

export const RegisterFormSchema = z
  .object({
    // Username
    username: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters")
      .max(50, "Username cannot be longer than 50 characters"),
    // Email address of the person submitting the login form
    email: z
      .email({
        message: "Invalid email address. It should include @stud.noroff.no",
      })
      .trim()
      .min(5, "Email must be at least 5 characters")
      .endsWith("@stud.noroff.no", {
        message: "Only @stud.noroff.no are allowed",
      }),
    // Password of the login form
    password: z
      .string()
      .trim()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password cannot be longer than 100 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/,
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and a special character",
      ),
    confirmPassword: z.string().trim(),
    venueManager: z.boolean(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
