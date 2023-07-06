import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Tarjeta from "./Tarjeta"
import novedad1 from '../assest/novedad1.webp'
import novedad2 from '../assest/novedades2.png'
import novedad3 from '../assest/novedad3.webp'
import { Box, Typography } from "@mui/material"
const Novedades = () => {
    return (
        <>
            <Grid container spacing={2}  pb={10} pl={2} pr={2}>
                <Box
                    sx={{
                        width: "100%",
                        textAlign: "center",
                        paddingY: "3rem"
                    }}
                >
                    <Typography variant="h3" color="var(--azul)" fontWeight={700}>
                        NOVEDADES
                    </Typography>
                    {/*<Typography variant="h4" color="var(--azul)">
                        Todo lo pasa en el CFL401
                </Typography>*/}

                </Box>
                <Grid xs={12} md={4}>
                    <Tarjeta foto={novedad1} title="Novedad1" titulo=" " texto=" " />
                </Grid>
                <Grid xs={12} md={4}>
                    <Tarjeta foto={novedad2} title="Novedad2" titulo="" texto=" " />
                </Grid>
                <Grid xs={12} md={4} >
                    <Tarjeta foto={novedad3} title="Novedad3" titulo="" texto=" " />
                </Grid>
            </Grid>
        </>
    )
}
export default Novedades 