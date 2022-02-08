import * as React from "react";
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact: React.FC = () => {
    return (
      <>
        <h1>Kontakt</h1>
        <Paper elevation={3}>
            <p>Stary Młyn</p>
            <p>Aleja Niepodległości 158</p>
            <p>64-920 Piła</p>
            <p><PhoneIcon/> <a href="tel:509871406"> 509 871 406</a></p>
        </Paper>
      </>
    );
  };
  
  export default Contact;