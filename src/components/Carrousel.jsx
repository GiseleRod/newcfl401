import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Foto1 from "../assest/foto2.webP"
import Foto2 from "../assest/foto3.webP"

function Carrousel(props) {


    return (
        <Carousel>

            <div className=' foto-carrousel' id='foto-carrousel-1'>
                {/* <div className='text-carrousel'>
            <h2>PROPUESTA</h2>
            <h2>FORMATIVA 2023</h2>
            <p>El objetivo pricipal de nuestro centro es capacitar a nuestros alumnos para una salida laboral</p>
            </div>*/}
            </div>
            <div className=' foto-carrousel' id='foto-carrousel-2'>
                  {/* <div className='text-carrousel'>
            <h2>PROPUESTA</h2>
            <h2>FORMATIVA 2023</h2>
            <p>El objetivo pricipal de nuestro centro es capacitar a nuestros alumnos para una salida laboral</p>
            </div>*/}
            </div>
            <div className='foto-carrousel' id='foto-carrousel-3'>
                  {/* <div className='text-carrousel'>
            <h2>PROPUESTA</h2>
            <h2>FORMATIVA 2023</h2>
            <p>El objetivo pricipal de nuestro centro es capacitar a nuestros alumnos para una salida laboral</p>
            </div>*/}

            </div>
        </Carousel>
    )
}
export default Carrousel