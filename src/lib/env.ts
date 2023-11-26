import { environmentVariables } from "@/schema/env";

console.log('xxxxxxxxxxxxxxxx environmentVariables=', environmentVariables)
 
export const envVariables = environmentVariables.parse(process.env)