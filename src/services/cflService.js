import http from "./http-common";
import authHeader from './auth-header';

const getUltimosTres = () => {
 /* let config = {
    //headers:authHeader() ,
    params
  }*/
  return http.get("/upload/ultimostres" );
};

const setUrl=(params)=>{
   let config = {
    //headers:authHeader() ,
    params
  }
  return http.post("/upload/guardar",params)
}

const getHorarios=async(id)=>{
  return await http.get(`familia/gethorarios/${id}`)
}

const getSedeByID=async(id)=>{
  return await http.get(`familia/getByIdSede/${id}`)
}


const CflService = {
 getUltimosTres,
 setUrl,
 getHorarios,getSedeByID
};

export default CflService;
