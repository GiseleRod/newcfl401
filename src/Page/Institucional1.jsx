
import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';


const Institucional = () => {

    return (
        <>
        <Box sx={
        {backgroundColor:"#F2F2F2",
        marginTop:"2rem",
        paddingBottom:"2rem",
        
        }}>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>

                    <div id="foto_institucional" className="foto-carrousel"></div>
                </Grid>
                <Grid xs={12} md={6}>
                    <Typography
                        variant="h3"
                        component="h3"
                        sx={{ fontWeight: "700", color: "var(--azul)" }}
                        mb={4}
                        pr={2}
                    >
                        CENTRO DE FORMACIÓN LABORAL 401
                    </Typography>
                     <Typography variant="h4" component={"p"}  pl={{xs:2}} pr={2}>
                        El Centro de Formación Profesional de San
                        Antonio de Areco, fue inaugurado el 27 de
                        mayo de 1987, denominándose Centro de
                        Formación Profesional N° 52, en las dependencias
                        del que fuera Consejo Escolar de esta localidad,
                        ubicado en las calles Azcuénaga y Moreno.
                    </Typography>
                   
                </Grid>
            </Grid>
            <Grid >
             <Typography variant="h4" component={"p"} pl={2} pr={2} >
                        Se creó por un convenio firmado entre la Dirección General de Cultura y Educación y
                        nuestra Municipalidad, interviniendo en esta gestión: el Profesor José
                        Gabriel Dumont, el entonces Intendente,Doctor Teodoro Dominguez, el
                        Director de Educación 9 Cultura Municipal Dionisio Lambertini, la Secretaria Prof.
                        Matilde Roccatagliata
                        de Rojo y la Inspectora
                        de D. E. A. y F. P. Sra.
                        Sarmiento.
                    </Typography>
                     <Typography variant="h4" component={"p"} pl={2} pr={2}>
                        <b>EL CLUB DE LEONES</b> de nuestra cuidad, decidió donar el entonces edificio, donde funcionaba el
                        Consejo Escolar, para que allí se desempeñara el <b>CENTRO DE FORMACIÓN</b>. El primer Director fue el Profesor Miguel Ángel Gasparini, ocupando este cargo desde 1987 a 1989.
                    </Typography>
                 <Typography variant="h4" component={"p"} pl={2} pr={2}>
                    Previamente al comienzo de las clases, se dicto
                    un curso de Formación de Instructores; el cual se
                    llevo a cabo de agosto a noviembre del año 1986,
                    en las instalaciones de la Escuela Nº3, bajo la
                    responsabilidad del Instructor Jefe Victor Caputto.
                    Egresando en esa oportunidad, los primeros
                    Instructores: Ayala, Centurión, Lépore, Gomez,
                    Vandoni, Rossi, Bidone, Bardo, Morello, Mechali,
                    Martínez González, Falivene y Barnetche.
                </Typography>
                 <Typography variant="h4" component={"p"} pl={2} pr={2}>
                    El 27/05/87 comenzaron a dictarse los primeros
                    cursos, los cuales fueron:
                </Typography>
                 <Typography variant="h4" component={"p"} pl={2} pr={2} pt={1}>
                    <ul >

                        <li style={{ listStyleType: "square" }}>Electricidad</li>
                        <li style={{ listStyleType: "square" }}>Carpintero de banco</li>
                        <li style={{ listStyleType: "square" }}>Modista</li>
                        <li style={{ listStyleType: "square" }}>Mecánica del automotor</li>
                        <li style={{ listStyleType: "square" }}>Contabilidad</li>
                        <li style={{ listStyleType: "square" }}>Carpintería</li>
                    </ul>
                </Typography>
                 <Typography variant="h4" component={"p"} pl={2} pr={2}>
                    En 1993, se dicto en la sede de este Centro el segundo
                    curso de Formación de Instructores a cargo del
                    Instructor Jefe Luis Crossa.
                </Typography>
                 <Typography variant="h4" component={"p"} pl={2} pr={2}>
                    En 1997, se lo denomina como Centro de Formación Profesional N° 401.
                </Typography>
                 <Typography variant="h4" component={"p"} pl={2} pr={2}>
                    Vaya, nuestro mas profundo agradecimiento a aquellos
                    que estuvieron, a los que no están y a los que nos toca
                    hoy, ser parte y continuar escribiendo la historia.
                </Typography>
            </Grid>
            </Box>
        </>
    )
}
export default Institucional