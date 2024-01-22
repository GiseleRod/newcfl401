import Grid from "@mui/material/Unstable_Grid2/Grid2"
import Tarjeta from "./Tarjeta"
import novedad1 from '../assest/novedad1.webp'
import novedad2 from '../assest/novedades2.png'
import novedad3 from '../assest/novedad3.webp'
import { Box, Typography } from "@mui/material"
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
            .catch((error)=>console.log(error))
            
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
                            <Tarjeta foto={data.url} title={"Novedad "+(i+1)} titulo={data?.titulo} texto={data?.bajada} />
                        </Grid>
                    )
                })}
                
            </Grid>
        </>
    )
}
export default Novedades 