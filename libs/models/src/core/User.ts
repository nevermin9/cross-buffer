import { z } from "zod/v4-mini";

export interface User {
    id?: number;
    username: string;
    email: string;
    two_factor_enabled: boolean;
    created_at?: string;
    updated_at?: string;
}

export const userSchema = z.object({
    id: z.optional(z.number()),
    username: z.string(),
    email: z.string(),
    two_factor_enabled: z.boolean(),
    created_at: z.optional(z.string()),
    updated_at: z.optional(z.string()),
});

// export type User = z.infer<typeof userSchema>;
