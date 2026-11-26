import { z } from "zod";
import { countWords } from "./utils";

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

export const ManageVenueSchema = z.object({
  // Venue details
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name cannot be longer than 100 characters"),
  description: z
    .string()
    .trim()
    .min(8, "Description must be at least 8 characters")
    .refine((value) => countWords(value) <= 160, {
      message: "Description cannot be longer than 160 words",
    }),
  // Venue images
  media: z
    .array(
      z.object({
        url: z.string().trim(),
        alt: z.string().trim(),
      }),
    )
    .max(5),
  // Price and capacity
  price: z
    .number({ error: "Price must be entered" })
    .min(0, "Price must be a positive number"),
  maxGuests: z
    .number({ error: "Maximum guests must be entered" })
    .min(0, "Capacity must be a positive number"),
  // Rating
  rating: z.optional(
    z
      .number()
      .min(0, "Rating must be a positive number")
      .max(5, "Rating cannot be more than 5"),
  ),
  // Amenities
  meta: z.object({
    wifi: z.boolean(),
    parking: z.boolean(),
    breakfast: z.boolean(),
    pets: z.boolean(),
  }),
  // Location
  location: z.object({
    address: z.optional(z.string().trim()),
    city: z.optional(z.string().trim()),
    zip: z.optional(z.string().trim()),
    country: z.optional(z.string().trim()),
    continent: z.optional(z.string().trim()),
    lat: z.optional(z.number()),
    lng: z.optional(z.number()),
  }),
});

export const CreateBookingSchema = z.object({
  dateFrom: z.string().trim(),
  dateTo: z.string().trim(),
  venueId: z.string().trim(),
  guests: z.number().min(1, "Guests must be at least 1"),
});
