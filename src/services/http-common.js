import axios from "axios";

export default axios.create({
  baseURL:"http://localhost:8080/api", //"https://aplicacion.cfl401areco.ar/api",
  headers: {
    
    "Content-type": "application/json"
  }
});