import axios from "axios";

// const url: string =process.env.NODE_ENV ==="production"? "https://todo.ihemon.me":"http://localhost:3000"
const url: string =process.env.NODE_ENV ==="production"? "https://sodi9.store":"http://localhost:3000"
// const url: string =process.env.NODE_ENV ==="production"? "http://localhost:3000":"http://localhost:3000"



console.log('★★★★★★★★★★★★★★★★★★ url=',url);
console.log('★★★★★★★★★★★★★★★★★★ process.env.NODE_ENV=',process.env.NODE_ENV);
export const myAxios = axios.create({baseURL:`${url}/api/`})