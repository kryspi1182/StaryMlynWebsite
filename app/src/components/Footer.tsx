import * as React from "react";
import tarcza from "../assets/plansza-informacyjna.jpg";
import "./Footer.css";
const Footer: React.FC = () =>{
    return (
      <>
    <footer className="footer">      
      <img src={tarcza}/>
      
    </footer>
    </>
    )};
    export default Footer;