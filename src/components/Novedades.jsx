import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Tarjeta from "./Tarjeta"
import Video from "../assest/videos/inscripcioncfl.mp4"
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material"
import CflService from "../services/cflService"
import { useEffect, useState } from "react";

import Cursos2024 from "./Cursos2024"

const Novedades = () => {
    const [novedades, setNovedades] = useState([])

    useEffect(() => {
        CflService.getUltimosTres()
            .then((resp) => {
                console.log(resp)
                setNovedades(resp.data.data)
            })
            .catch((error) => console.log(error))

    }, [])
    return (
        <>
            <Grid container spacing={2} pb={10} pl={2} pr={2}>
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

                    <Grid>
                        {/*<Cursos2024 />*/}
                    </Grid>
                </Box>
                {novedades.map((data, i) => {
                    return (
                        <Grid xs={12} md={4} key={i} >
                            <Tarjeta foto={data.url} title={"Novedad " + (i + 1)} titulo={data?.titulo} texto={data?.bajada} />
                        </Grid>

                    )
                })}
                <Grid xs={12} md={4}  >
                    <div className='Banner-Novedades'>
                        <Card sx={{ minWidth: 345 }}>
                            <CardMedia
                                component="video"
                                src={Video}
                                sx={{ height: "500px" }}
                                
                                title=""
                                controls
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                  
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>


            </Grid>
        </>
    )
}
export default Novedades 