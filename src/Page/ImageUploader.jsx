import React, { useState } from 'react';
import axios from 'axios';
import { Box, Typography, Button} from "@mui/material";
import CflService from '../services/cflService';
import Grid from '@mui/material/Unstable_Grid2';
import Swal from 'sweetalert2'

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async () => {
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        params: {
          key: '27a4bae7571d8121e23126472b52aa78' // Reemplaza con tu clave de API de ImgBB
        }
      });

      if (response.status === 200) {
        const { data } = response.data;
        console.log('URL de la imagen:', data.url);
        const dato = {
          titulo: "",
          bajada: "",
          url: data.url
        }

        CflService.setUrl(dato)
        .then((resp)=>{
          setLoading(false)
          setSelectedImage(null)
          Swal.fire({
            icon: 'success',
            title: '',
            text: 'Subiste con exito la imagen ',
            
          })

        })
        .catch((error)=>{
          console.log(error)
        })
        
      } else {
        console.log('Error al subir la imagen.');
      }
    } catch (error) {
      console.log('Error de red:', error);
    }
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedImage(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
   
      <Grid container  mt={2} mb={2}>
      <Grid xs={12} md={6}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          style={{ display: 'none' }}
          id="image-upload-input" // Agregamos un ID para que podamos hacer clic en él desde un botón
        />
        <label htmlFor="image-upload-input"> {/* Hacemos clic en el input al hacer clic en la etiqueta */}
          <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
            style={{
             
              width: '100%',
              height: '200px',
              border: '2px dashed #ccc',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '16px'
            }}
          >
            {selectedImage ? (
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '100%', maxHeight: '100%' }} />
            ) : (
              <p>Arrastra y suelta una imagen aquí o haz clic para seleccionar una</p>
            )}
          </div>
        </label>
       
      </Grid>
      <Grid  xs={12} md={6} sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Grid>
        <Button
          onClick={handleImageUpload}
          disabled={!selectedImage}
          variant="contained"
          color="primary"
        >
          {loading?"Subiendo Imagen":"Subir imagen"}
        </Button>
        </Grid>
      
      </Grid>
      </Grid>
    
  );
};

export default ImageUploader;
