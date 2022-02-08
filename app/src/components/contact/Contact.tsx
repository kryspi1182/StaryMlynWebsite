import * as React from "react";
import Paper from '@mui/material/Paper';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact: React.FC = () => {
  return (
    <>
      
      <Paper elevation={3} style={{width:"50%", padding: "10px", margin: "10px",float:'right'}}>
      <h2>Kontakt</h2>
            <p>Stary Młyn</p>
            <p>Aleja Niepodległości 158</p>
            <p>64-920 Piła</p>
            <p><PhoneIcon/> <a href="tel:509871406"> 509 871 406</a></p>
      </Paper>
    </>
  );
};

export default Contact;
