import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import logo from '../assest/logoCFL200.webp'

const Mision = () => {
    return (
        <Box sx={{ backgroundColor: '#F29F05' }}>
            <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", minHeight: "400px" }}>
                <Grid xs={12} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={logo} width="200px" height={"200px"} />
                </Grid>
                <Grid xs={12} md={8} pl={2}>
                    <Typography variant="h3" color="white" textAlign="center" fontWeight={700}>
                        NUESTRA VISIÓN
                    </Typography>
                    <Typography variant="h5" color="white" textAlign="justify" p={2} >
                        Nuestro propósito es diseñar acciones orientadas a la adquisición de capacidades que permitan la inserción
                        socio-laboral, compatibilizar la promoción social, profesional y personal con la productividad de la
                        economía local y regional.
                    </Typography>
                </Grid>
            </Grid>

        </Box>
    )
}
export default Mision;