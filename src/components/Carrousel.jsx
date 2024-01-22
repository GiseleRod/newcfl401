import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Tyh6ograh6hy } from '@mui/material'
import { cargador } from '../services/cargador de fotos';

function Carrousel(h6roh6s) {

    //const fotos=cargador(require.context('../assest/imagenes', false, /\.(png|jpe?g|svg|WebP)$/));
   // console.log(fotos[0])
    return (
        <Carousel>

            <div className=' foto-carrousel' id='foto-carrousel-1' >
                <div className='text-carrousel'></div>
                <h6  >
                    Formamos para el trabajo, trabajamos para formar
                </h6>
              

            </div>
            <div className=' foto-carrousel' id='foto-carrousel-2'>
                <div className='text-carrousel'></div>
                <h6  >
                    Formamos para el trabajo, trabajamos para formar
                </h6>
            </div>
            <div className='foto-carrousel' id='foto-carrousel-3'>
                <div className='text-carrousel'></div>
                <h6  >
                    Formamos para el trabajo, trabajamos para formar
                </h6>

    </div>
        </Carousel>
    )
}
export default Carrousel