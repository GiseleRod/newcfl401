import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from "@mui/material"
import Carrousel from "../components/Carrousel"
import { useEffect, useState } from "react"
import http from "../services/http-common";
import authHeader from '../services/auth-header';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Image } from "@mui/icons-material";
import Grid from '@mui/material/Unstable_Grid2';
import moment from "moment/moment";
import Animations from "../components/Animations";

const Home = () => {
  const [familias, setFamilias] = useState([])
  const [cursos, setCursos] = useState([])
  const [loading,setLoading]=useState(true)
  //const [isDowloading,setIsDowloading]=useState(false)

  var fechaHoy=moment();

  const calcularFecha=(data)=>{
    //let fechaPublicacion=moment(data?.fechaPublicacion)

   // if ( fechaHoy.isBefore(fechaPublicacion.add(30,'days'))) {
      return data?.nombre
    //}else {
    //  return null
    //}
  }
   
  
  useEffect(() => {
    const getAllFamilias = () => {
      try {
        http.get("/familia/getAll", { headers: authHeader() })
          .then((res) => {
            if (res.data.success) {
              console.log(res.data.data)
              setFamilias(res.data.data)
              setLoading(false)
            }
          })
          .catch((error) => console.log(error))
      } catch (error) {
        console.log(error)
      }


    }
    getAllFamilias()
  }, [0])

 

  return (
    

    <Box sx={{
      backgroundColor: "#F2F2F2",

    }}>
      <Carrousel></Carrousel>
      {loading&&<Animations/>}
      {familias.map((data, i) => {
        return (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1
                            }}>
              <Typography variant="h4" >
                {data.nombre}
              </Typography>
              </Box>
              <Box sx={{
                            display: { xs: 'flex', md: 'none' },
                            mr: 1
                            }}>
              <Typography variant="h6" >
                {data.nombre}
              </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
            <Grid container spacing={2}>
            <Grid xs={12} md={4}>
              <img src={data.url} width="100%" />
              </Grid>
            <Grid xs={12} md={8}>
              {data.cursosByIdFamilia.map((data, j) => {
                
                return (
                  
                  <Button onClick={(e) => console.log(data)} key={j} size="large" sx={{ width:"100%",textAlign:"center",textWrap: "balance" }}>
                    <Typography >
                      {calcularFecha(data)}
                    </Typography>
                  </Button>
                  
                );
              })}
              </Grid>
             </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}

    </Box>


  )

}
export default Home