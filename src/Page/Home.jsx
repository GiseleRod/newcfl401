import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Button } from "@mui/material"
import Carrousel from "../components/Carrousel"
import { useEffect, useState } from "react"
import http from "../services/http-common";
import DatosDelCentro from "../components/DatosDelCentro";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import Grid from '@mui/material/Unstable_Grid2';
import moment from "moment/moment";
import Animations from "../components/Animations";
import Modal from '@mui/material/Modal';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Mision from "../components/Mision";
import { animateScroll as scroll } from "react-scroll";
import 'moment/locale/es';

import DetalleDelCurso from "../components/DetallesDelCurso";
import { ModalHeader } from "react-bootstrap";
import Novedades from "../components/Novedades";
import CflService from "../services/cflService";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "80%",
  maxHeight: "80%",
  bgcolor: 'background.paper',
  border: '2px solid #303AF2',
  boxShadow: 24,
  overflowY: "scroll",
  padding: { xs: "0", md: "4rem" }

};
const Home = () => {
  const [familias, setFamilias] = useState([])
  const [cursos, setCursos] = useState([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false)
  const [datosModal, setDatosModal] = useState()
  //const [isDowloading,setIsDowloading]=useState(false)


  const handleOpen = async(data) => {
    
      const res=await CflService.getHorarios(data.idCurso)
      const resSede=await CflService.getSedeByID(data.sedeIdSede)
    //console.log(res.data.data)
      data.diasDeSemanaHasCursosByIdCurso=res.data.data;
      data.sedeBySedeIdSede=resSede.data.data
    
    //console.log(data)
    //data.diasDeSemanaHasCursosByIdCurso=
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
    scroll.scrollTo()
    const getAllFamilias = () => {
      try {
        http.get("/familia/getAllcoorte")
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
      marginTop: "2rem",
      paddingBottom: "2rem",
      position: 'relative'
    }}>

      <Carrousel ></Carrousel>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          paddingY: "5em"
        }}
      >
        <Typography variant="h3" color="var(--azul)" fontWeight={700}>
          PROPUESTA FORMATIVA 2024
        </Typography>
        <Typography variant="h4" color="var(--azul)">
          Nuestros cursos otorgan Certificación Oficial
        </Typography>

      </Box>
      {loading && <Animations />}
      {familias.map((data, i) => {
        return (
          <Accordion key={i} sx={{ mb: 3, width: "90%", transform: "translateX(-50%)", left: "50%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1
              }}>
                <Typography variant="h5" color="var(--azul)">
                  {data.nombre}
                </Typography>
              </Box>
              <Box sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1
              }}>
                <Typography variant="h6" color="var(--azul)" >
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

                        <Button onClick={() => handleOpen(data)} key={j} size="large"
                          sx={{ width: "100%", textAlign: "center", textWrap: "balance" }}
                        >
                          <Typography >
                            {nombre}{" "}
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
      <Mision />
      <Novedades />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >

        <Box sx={style} id="modal-content"  >

          <Box sx={{
            background: "#303AF2",
            width: "100%",

            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>

            <Typography variant="h5" component="h1" color="#fff" p={2}>
              {datosModal?.nombre}
            </Typography>

          </Box>
          <DetalleDelCurso datosModal={datosModal} />
          <Grid container sx={{ justifyContent: "start" }}>
            <Button variant="contained" href="https://cursosipfl.trabajo.gba.gob.ar/"
              target="_blank" sx={{ margin: "2rem 0 3rem 1rem", backgroundColor: "#303AF2",padding:"10px 40px 10px 40px" }}>Inscripción </Button>

          </Grid>
          <DatosDelCentro />
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button variant="contained" onClick={handleClose} sx={{ margin: "2rem 1rem 3rem 1rem", backgroundColor: "#303AF2",padding:"10px 40px 10px 40px" }}>Cerrar </Button>
          </Box>
          <Button sx={{ position: "absolute", top: 0, right: 0, color: { xs: "white", md: "#303AF2" } }} onClick={handleClose} >
            <HighlightOffIcon sx={{ fontSize: "3em" }} />
          </Button>
        </Box>

      </Modal>

    </Box>



  )

}
export default Home