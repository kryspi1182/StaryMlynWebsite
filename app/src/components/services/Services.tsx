import * as React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ListItemText,Paper } from "@mui/material";

const Services: React.FC = () => {
  return (
    <>
      <Paper elevation={3} style={{ padding: "10px", margin: "20px"}}>
      <h2>Usługi</h2>
      <h4 style={{textAlign:"center"}}>Organizujemy imprezy:</h4>
      <List style={{textAlign:"center"}}>
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
            </Paper>
    </>
  );
};

export default Services;
