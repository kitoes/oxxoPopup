import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Fragment } from 'react';
import Modal from '@mui/material/Modal';
/**
 * This component is used to display the required
 * privacy statement which can be found in a link in the
 * about tab.
 */


export default function Info() {
    const [usuario,setUsuario]= useState(
      {
        nombre:"Dorian",
        correo: "dmendoza@overcastmx.com",
        organizacion:"overcast",
        rol: "Desarrollador Middle"
      }
    );
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <Fragment>
    <Button onClick={handleOpen}>Abrir PopUp</Button>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={{ width: "70vw", border:6, borderColor:"#fec630", borderRadius:"50px", backgroundColor:"#c60707",position:"absolute", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}>
        <Card sx={{ borderRadius:"20px",backgroundColor:"#fec630", width:"80%", margin:"2% 0 0 10%" }}>
            <Typography gutterBottom color={"#de2324"} align='center' borderColor={"#fff"} variant="h2" component="div">
              { usuario.nombre}
            </Typography>
        </Card>
        <CardContent sx={{color:"#FFF"}}>
          
          <Typography gutterBottom variant="h3" component="div">
            <strong>Organización: </strong> { usuario.organizacion}
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            <strong>Correo: </strong> { usuario.correo}
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            <strong>Contactar: </strong>
          </Typography>
          <TextareaAutosize
              maxRows={8}
              aria-label="maximum height"
              placeholder="Redacta aquí tu mensaje"
              defaultValue=""
              style={{ width: "80%",height:"10vh",margin: "0 0 0 10%", fontSize:"1.5em", resize:"none", borderRadius:"20px", padding:"1%"}}>
          </TextareaAutosize>
          <CardActions align="right">
            <Button size="medium"  variant="contained" color="primary" sx={{marginLeft:"90%"}}>Enviar</Button>
          </CardActions>
        </CardContent>
          
      </Card>
    </Modal>
    
    
    </Fragment>
    );
}


