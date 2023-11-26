import { environmentVariables } from "@/schema/env";

console.log('xxxxxxxxxxxxxxxx environmentVariables=', environmentVariables)
console.log('999999999999999=', 0)
 
export const envVariables = environmentVariables.parse(process.env)