import { environmentVariables } from "@/schema/env";

console.log('xxxxxxxxxxxxxxxx environmentVariables=', environmentVariables)
console.log('999999999999999=', 0)
 


console.log('■■■■■■      process.env.REACT_APP_ENV=', process.env.REACT_APP_ENV);







export const envVariables = environmentVariables.parse(process.env)