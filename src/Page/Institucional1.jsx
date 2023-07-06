
import { Box, Typography } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';


const Institucional = () => {

    return (
        <>
            <Box sx={
                {
                    backgroundColor: "#F2F2F2",
                    marginTop: "2rem",
                    paddingBottom: "2rem",

                }}>
                <Grid container spacing={2}>
                    <Grid xs={12} md={12}>

                        <div id="foto_institucional" className="foto-carrousel"></div>
                    </Grid>
                    
                </Grid>
                <Grid >
                <Typography
                            variant="h3"
                            component="h3"
                            sx={{ fontWeight: "700", color: "var(--azul)" }}
                            mb={4}
                            pr={2}
                            pt={3}
                            textAlign="center"
                        >
                            CENTRO DE FORMACIÓN LABORAL 401
                        </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5} >
                    El Centro de Formación Profesional de San Antonio de Areco se crea según convenio del año 1986 entre la Dirección General de Escuelas y Cultura y el Municipio local, considerando la necesidad de contar con una estructura educativa para la formación de mano de obra especializada en concordancia con los requerimientos de la zona, promoviendo la capacitación de jóvenes y adultos para el ámbito laboral.
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5}>
                        Se inaugura el 27 de mayo de 1987, denominándose Centro de Formación Profesional N° 52, en las dependencias del que fuera el Consejo Escolar, ubicado en las calles Azcuénaga y Moreno. Posteriormente, el Club de Leones de nuestra ciudad, decidió donar el edificio donde funcionaba para que en el desarrollase su tarea educativa.
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5}>
                        Previamente al inicio de clases, se dictó un curso de Formación de Instructores desde agosto a noviembre de 1986, en las instalaciones de la Escuela Nº3 con el objetivo de capacitar al equipo docente.
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5}>
                        El 27 de mayo de 1987 iniciaron los primeros cursos:  Electricidad, Carpintero de banco, Modista, Mecánica del automotor y Contabilidad.
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5} >
                        En 1994 la Provincia de Buenos Aires reenumeró los Servicios Educativos por Distrito y el Centro pasó a denominarse C.F.P. Nº 401 de San Antonio de Areco
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5}>
                        Desde abril de 2001 hasta 2009, funcionó un anexo del CFP N° 401 de San Antonio de Areco en la localidad de Capitán Sarmiento.
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5}>
                        En 2018 con la intención de mejorar la empleabilidad de las personas y la competitividad en el mundo laboral, el Ministerio de Trabajo bonaerense puso en marcha el Instituto Provincial de Formación Laboral. A partir de un nuevo convenio firmado entre el mencionado Ministerio y el Municipio local, nuestro CFP cambió su nombre a Centro de Formación Laboral N° 401.
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5}>
                        En 2020, este CFL se incorpora al Registro de Capacitadores del Ministerio de Desarrollo Agrario de la Provincia de Buenos Aires, con el fin de otorgar el Carnet de Manipulador de Alimentos de acuerdo al CAA – Ley N° 18.284
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2}>
                        Los cursos que se dictan en este CFL son gratuitos, responden a los Diseños Curriculares del Consejo Federal de Educación y se otorgan Títulos Oficiales de la Dirección de Cultura y Educación de la Provincia de Buenos Aires correspondientes a la modalidad Formación Profesional.
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5}>
                        Nuestra propuesta formativa anual se fundamenta en las necesidades socio-productivas del distrito planificando cursos de Formación Inicial en sus tres niveles, Formación Continua y Capacitación Laboral de diversas familias profesionales.
                    </Typography>
                    <Typography variant="h5" component={"p"} pl={2} pr={2} pb={1.5}>
                        Vaya, nuestro mas profundo agradecimiento a aquellos que estuvieron, a los que no están y a los que nos toca hoy, ser parte y continuar escribiendo la historia.
                    </Typography>
                </Grid>
            </Box>
        </>
    )
}
export default Institucional