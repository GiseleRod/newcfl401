import axios from "axios";

export default axios.create({
  baseURL:"https://aplicacion.cfl401areco.ar/api",
  headers: {
    
    "Content-type": "application/json"
  }
});