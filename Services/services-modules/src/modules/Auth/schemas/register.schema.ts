import { z } from 'zod';

const registerUserSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    username: z.string(),
    password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    c_password: z.string().min(8),
    accepted: z.boolean()
}).refine((data) => data.password === data.c_password, {
    message: "Passwords don't match",
    path: ["c_password"],
});
export default registerUserSchema;