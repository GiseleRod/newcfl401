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
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #303AF2',
  boxShadow: 24,

};
const Home = () => {
  const [familias, setFamilias] = useState([])
  const [cursos, setCursos] = useState([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [datosModal, setDatosModal] = useState()
  //const [isDowloading,setIsDowloading]=useState(false)
  const handleOpen = (data) => {
    setDatosModal(data)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);
  var fechaHoy = moment();

  const calcularFecha = (data) => {
    let fechaInicio = moment(data?.fechaInicio)

    if (fechaHoy.isBetween(data.fechaPublicacion, fechaInicio.add(25, 'days'))) {
      return data?.nombre
    } else {
      return null
    }
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
      {loading && <Animations />}
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
                    let nombre = calcularFecha(data)
                    if (nombre !== null) {
                      return (

                        <Button onClick={() => handleOpen(data)} key={j} size="large" sx={{ width: "100%", textAlign: "center", textWrap: "balance" }}>
                          <Typography >
                            {nombre}
                          </Typography>
                        </Button>

                      );
                    }

                  })}
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{
            background: "#303AF2",
            width: "100%",
            height: "4em",
            display: "flex",
            alignItems: "center"
          }}>
            <Typography variant="h5" component="h1" color="#fff" pl={1}>
              {datosModal?.nombre}
            </Typography>
          </Box>

          <Typography variant="h6" component="h2" pl={1}>
            Detalle del curso
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
                <Typography variant="h6" component="h3" color="#303AF2"> 
                  Fecha
                </Typography>
                <Typography variant="h6" component="h3" >
                  {datosModal?.fechaInicio} / {datosModal?.fechaFinalizacion}
                </Typography>
            </Grid>
            <Grid xs={12} md={6}>
            <Typography variant="h6" component="h3" color="#303AF2"> 
                  Fecha
                </Typography>
                <Typography variant="h6" component="h3" >
                  {datosModal?.fechaInicio} / {datosModal?.fechaFinalizacion}
                </Typography>
            </Grid>
          </Grid>


        </Box>
      </Modal>
    </Box>



  )

}
export default Home