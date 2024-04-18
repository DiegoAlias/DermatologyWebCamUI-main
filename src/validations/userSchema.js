import { z } from 'zod'

export const userSchema = z.object({
    username: z.string().min(4, { message: "Name must be at least 3 characters long" }).max(200, { message: "Name must be at least 200 characters long" }),
    password: z.string().min(8, { message: "Password must bee at least 8 characters long" })
})