import axios from "axios";

export default axios.create({
  baseURL: "https://areco.gob.ar:9536/api",
  headers: {
    
    "Content-type": "application/json"
  }
});