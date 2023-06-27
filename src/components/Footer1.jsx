import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import logo from '../assest/logoCFL.png'
import ApartmentOutlinedIcon from '@mui/icons-material/Apartment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
const Footer = () => {
    return (
        <Box sx={{ backgroundColor: 'var(--azul)' }}>
            <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", minHeight: "400px" }}>
                <Grid xs={12} md={4} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img src={logo} width="200px" height={"200px"} />
                </Grid>
                <Grid xs={12} md={8} pl={2}>
                    <Typography variant="h3" color="white" textAlign="center" fontWeight={700}>
                        Contacto
                    </Typography>
                    <Grid xs={12} md={6} container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Grid xs={1} sx={{ display: "flex", alignItems: "center" }} >
                            <ApartmentOutlinedIcon sx={{ color: "white" }} />
                        </Grid>
                        <Grid xs={11}>
                            <Typography variant="h6" component="h4" color="white">
                               Dirección:
                            </Typography>
                        </Grid>
                        <Grid>
                        <Typography variant="h6" component="h4" color="white">
                            Azcuénaga 248 San Antonio de Areco
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={6} container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Grid xs={1} sx={{ display: "flex", alignItems: "center" }} >
                            <EmailOutlinedIcon sx={{ color: "white" }} />
                        </Grid>
                        <Grid xs={11}>
                            <Typography variant="h6" component="h4" color="white">
                                Correo electrónico:
                            </Typography>
                        </Grid>
                        <Grid>
                        <Typography variant="h6" component="h4" color="white">
                            cfl401sada@gmail.com
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={6} container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Grid xs={1} sx={{ display: "flex", alignItems: "center" }} >
                            <SmartphoneOutlinedIcon sx={{ color: "white" }} />
                        </Grid>
                        <Grid xs={11}>
                            <Typography variant="h6" component="h4" color="white">
                                Tel:
                            </Typography>
                        </Grid>
                        <Grid>
                        <Typography variant="h6" component="h4" color="white">
                            2326-452928
                        </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    )
}
export default Footer;