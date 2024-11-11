import React, { useRef, useState } from "react"
import { Container, Form ,Button} from "react-bootstrap"
import emailjs from '@emailjs/browser';
import { Box } from "@mui/material"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from "react-router-dom";
const Contacto = () => {
    const [loading,setLoadind]=useState(false)
    const navigate=useNavigate()


    const form = useRef();
    const MySwal = withReactContent(Swal)
    const sendEmail = (e) => {
        e.preventDefault();
        setLoadind(true)
        emailjs.sendForm('service_gq2429h', "template_ctbvx6k", form.current, 'oh93a5yl8P3x6insn')
            .then((result) => {
                MySwal.fire({
                    title: <strong>Mensaje Enviado!</strong>,
                    
                    icon: 'success' 
                  }).then((res)=>{
                    navigate("/Home")
                  })
                console.log("Mensaje enviado");
            }, (error) => {
                console.log(error.text);
                setLoadind(false)
            });
    };
    return (
        <Box sx={{
            backgroundColor: "#F2F2F2",
      
          }}>
        <Container>
            <div className="texto-portada-vision mb-3 pb-5 pt-5 ">
                <h2>Contacto</h2>
            
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Tu nombre" name="to_name"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@ejemplo.gmail.com" name="user_email"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" name="message" />
                </Form.Group>
                <div className="d-grid gap-2 mt-1  ">
                <Button disabled={loading} variant="outline-primary" className="boton-masinformacion" type="submit" value="Send" >
                  {loading?"Enviando":"Enviar Mensaje"}  
                </Button>
                </div>
            </Form>
            {/*<form ref={form} onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Mensaje</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
    </form>*/}
    </div>
        </Container>
        
        </Box>
    )
}
export default Contacto