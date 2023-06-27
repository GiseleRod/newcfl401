import { Typography} from "@mui/material"

import Grid from '@mui/material/Unstable_Grid2';
import moment from "moment/moment";

import 'moment/locale/es';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';



const DetalleDelCurso=({datosModal})=>{
    
return(
    <>
     <Typography variant="h5" component="h2" pl={2} pt={2}>
            Detalle del curso
          </Typography> 
         <Grid container spacing={2} p={2}>
            <Grid xs={12} md={6}>
              <Typography variant="h6" component="h3" color="#303AF2">
                Fecha
              </Typography>
              <Typography  variant="p" component="p" >
                {moment(datosModal?.fechaInicio).locale("es").format("LL")} / {moment(datosModal?.fechaFinalizacion).locale("es").format("LL")}
              </Typography>
            </Grid>
            <Grid xs={12} md={6}>
              <Typography variant="h6" component="h3" color="#303AF2">
                Sede
              </Typography>
              <Typography  variant="p" component="p" >
                  { datosModal?.sedeBySedeIdSede.nombre}
              </Typography>
            </Grid>
            <Grid xs={12} md={12}>
              <Typography variant="h6" component="h3" color="#303AF2">
                Días y horarios
              </Typography>
             { datosModal?.diasDeSemanaHasCursosByIdCurso.map((data,i)=>{
              return(
                <Typography variant="p" component="p" key={i}>
                {data.diasDeSemanaByDiasDeSemanaIdDiasDeSemana?.nombre}{": "} { data.horaInicio }{ " / "}{data.horaFin}
              </Typography>
              )
             })}
              
            </Grid>
            <Grid xs={12} md={6}>
              <Typography variant="h6" component="h3" color="#303AF2">
              Dirección
              </Typography>
              <Typography  variant="p" component="p" >
                {datosModal?.sedeBySedeIdSede.calle}{" "}{datosModal?.sedeBySedeIdSede.numero}{" "}{datosModal?.sedeBySedeIdSede.localidad}
              </Typography>
            </Grid>
            <Grid xs={12} md={6} container spacing={0}>
              <Grid xs={1} sx={{display:"flex",alignItems:"center"}}>
              <AccessibilityNewIcon color="primary" />
              
              </Grid>
              <Grid  xs={11}>
              <Typography variant="h6" component="h3" color="#303AF2">
                Cupos
              </Typography>
              </Grid>
            
              <Typography  variant="p" component="p" >
                  { datosModal?.cupo}
              </Typography>
            </Grid>
          </Grid>
    </>
)
}
export default DetalleDelCurso