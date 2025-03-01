import { z } from "zod";

export const signUpSchema = z.object({
    username: z.string()
        .min(3, "Username must be at least 3 characters long")
        .max(50, "Username must not exceed 20 characters")
        .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),

    password: z.string()
        .min(8, "Password must be at least 8 characters long")
        .max(50, "Password must not exceed 50 characters")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter")
        .regex(/[0-9]/, "Password must contain at least one number")
        .regex(/[\W_]/, "Password must contain at least one special character"),

    name: z.string()
        .min(2, "Name must be at least 2 characters long")
        .max(50, "Name must not exceed 50 characters")
        .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),

    email: z.string().email()
});
