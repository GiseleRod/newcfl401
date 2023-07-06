import axios from "axios";

export default axios.create({
  baseURL: "https://administracion.cfl401areco.ar/api",
  headers: {
    
    "Content-type": "application/json"
  }
});