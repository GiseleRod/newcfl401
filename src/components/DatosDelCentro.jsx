import { Typography } from "@mui/material"

import Grid from '@mui/material/Unstable_Grid2';
import moment from "moment/moment";

import 'moment/locale/es';
import ApartmentOutlinedIcon from '@mui/icons-material/Apartment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
const DetosDelCentro = () => {

    return (
        <>
            <Typography variant="h5" component="h2" pl={2} pt={2} >
                Datos del centro
            </Typography>
            <Grid container spacing={2} p={2} pb={6}>

                <Grid xs={12} md={6} container spacing={0}>
                    <Grid xs={1} sx={{ display: "flex", alignItems: "center" }}>
                        <ApartmentOutlinedIcon color="primary" />
                    </Grid>
                    <Grid xs={11}>
                        <Typography variant="h6" component="h3" color="#303AF2">
                            CFL
                        </Typography>
                    </Grid>

                    <Typography variant="h6" component="h3" >
                        401 - San Antonio de Areco
                    </Typography>
                </Grid>

                <Grid xs={12} md={6} container spacing={0}>
                    <Grid xs={1} sx={{ display: "flex", alignItems: "center" }}>
                        <ApartmentOutlinedIcon color="primary" />
                    </Grid>
                    <Grid xs={11}>
                    <Typography variant="h6" component="h3" color="#303AF2">
                        Entidad conveniante
                    </Typography>
                    </Grid>
                   
                    <Typography variant="h6" component="h3" >
                        Municipio
                    </Typography>
                </Grid>

                <Grid xs={12} md={6} container spacing={0}>
                    <Grid xs={1} sx={{ display: "flex", alignItems: "center" }}>
                        <EmailOutlinedIcon color="primary" />
                    </Grid>
                    <Grid xs={11}>
                    <Typography variant="h6" component="h3" color="#303AF2">
                        Correo electrónico
                    </Typography>
                    </Grid>
                    <Typography variant="h6" component="h3" >
                        cfl401sada@gmail.com
                    </Typography>
                </Grid>

                <Grid xs={12} md={6} container spacing={0}>
                    <Grid xs={1} sx={{ display: "flex", alignItems: "center" }}>
                        <SmartphoneOutlinedIcon color="primary" />
                    </Grid>
                    <Grid xs={11}>
                        <Typography variant="h6" component="h3" color="#303AF2">
                            Teléfono
                        </Typography>
                    </Grid>

                    <Typography variant="h6" component="h3" >
                        2326452928
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}
export default DetosDelCentro

