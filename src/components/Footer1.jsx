import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import logo from '../assest/logoCFL200.webp'
import ApartmentOutlinedIcon from '@mui/icons-material/Apartment';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import Button from '@mui/material/Button';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (
        <>
            <Box sx={{ backgroundColor: '#00b0ff' }}>
                <Grid container spacing={2} sx={{ display: "flex", alignItems: "stretch", justifyContent: "center", width: "100%", paddingBottom: "20px" }}>
                    <Grid xs={12} md={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src={logo} width="200px" height={"200px"} />
                    </Grid>
                    <Grid xs={12} md={6} pl={2}>
                        <Typography variant="h4" color="white" textAlign="center" fontWeight={700} pb={2}>
                            Contacto
                        </Typography>
                        <Grid xs={12} md={6} container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
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
                                    Azcuénaga 248-San Antonio de Areco
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid xs={12} md={6} container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
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
                        <Grid xs={12} md={6} container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
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
                    <Grid xs={12} md={3} pl={2}>
                        <Typography variant="h4" color="white" textAlign="center" fontWeight={700} pb={2}>
                            Redes
                        </Typography>
                        <Grid container spacing={2} sx={{ display: "flex", alignItems: "stretch", justifyContent: "center", width: "100%", paddingBottom: "20px" }}>
                            <Grid xs={12} md={12}>
                                <Button href="https://www.facebook.com/cfpsada" target="_blank">
                                    <FaFacebook size={60} color="white" />
                                </Button>
                            </Grid>
                            <Grid xs={12} md={12}>
                                <Button href="https://www.instagram.com/cfl401sada/" target="_blank">
                                    <FaInstagram size={60} color="white" />
                                </Button>
                            </Grid>
                        </Grid>


                    </Grid>

                </Grid>

            </Box>
            <Box sx={{ backgroundColor: '#00b0ff', display: "flex", justifyContent: "center" }}>

                <div className="barra-horizontal"></div>
            </Box>
            <Box sx={{ backgroundColor: '#00b0ff', display: "flex", justifyContent: "center" }}>
                <Typography color="white" textAlign="center">
                    Realizado con 💪🏻 de los alumnos de informática - CFL401 SADA
                </Typography>

            </Box>
        </>
    )
}
export default Footer;