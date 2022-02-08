import * as React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText,Paper } from "@mui/material";
import eat from "../../assets/20/2_jedzenie.jpg";
import eat2 from "../../assets/20/3_jedzenie.jpg";
import eat3 from "../../assets/20/4_jedzenie.jpg";
import eat4 from "../../assets/16/4_jedzenie.jpg";
import "./Services.css";

const Services: React.FC = () => {
  return (
    <>
      <Paper elevation={3} style={{ padding: "10px", margin:"20px 30px 120px 30px "}}>
      <h2>Usługi</h2>
      <h4 style={{textAlign:"center"}}>Organizujemy imprezy:</h4>
      <List style={{textAlign:"center"}} className="list">
                <ListItem>
                  <ListItemText
                    primary="Przyjęcia weselne"/>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Chrzciny"/>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Przyjęcia komunijne"/>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Rocznice"/>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Urodziny"/>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Imieniny"/>
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Inne imprezy okolicznościowe"/>
                </ListItem>
            </List>
            <div className="images">
            <img src={eat}/>
            <img src={eat2}/>
            <img src={eat3}/>
            <img src={eat4}/>
            </div>
            </Paper>
    </>
  );
};

export default Services;
