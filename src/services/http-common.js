import axios from "axios";

export default axios.create({
  baseURL:"https://api.administracion.cfl401areco.edu.ar/api",
  headers: {
    
    "Content-type": "application/json"
  }
});