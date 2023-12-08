import { z } from "zod";

export const environmentVariables = z.object({
    DATABASE_URL: z.string(),

    DIRECT_URL: z.string(),

    REACT_APP_ENV: z.string(),



    GITHUB_CLIENT_ID: z.string(),
    GITHUB_CLIENT_SECRET: z.string(),

    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),

    NEXTAUTH_SECRET: z.string(),
    NEXTAUTH_URL: z.string(),

    ENV_VARIABLE:z.string(),
    NEXT_PUBLIC_ENV_VARIABLE:z.string()

})