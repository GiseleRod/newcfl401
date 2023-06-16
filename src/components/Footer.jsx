import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import logo from '../assest/logoCFL.png'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#F29F05' }}>
            <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", minHeight: "400px" }}>
                <Grid xs={12} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={logo} width="200px" height={"200px"} />
                </Grid>
                <Grid xs={12} md={8} pl={2}>
                    <Typography variant="h3" color="white" textAlign="center" >
                        NUESTRA VISIÓN
                    </Typography>
                    <Typography variant="h6" color="white" textAlign="justify" p={2} >
                        El objetivo principal de nuestro Centro de Formación es capacitar lo mejor posible a los alumnos para desempeñarse en el campo profesional. Facilitar su adaptación a las modificaciones laborales que puedan producirse a lo largo de su vida. Construir perfiles profesionales y competencias laborales específicas altamente especializadas de cada curso de Formación Laboral.
                    </Typography>
                </Grid>
            </Grid>

        </Box>
    )
}
export default Footer;