import * as React from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Paths from "./common/consts/Paths";
import "./NavMenu.css";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles({
  customLink: {
    color: "#fff !important",
    backgroundColor: "#000",
    border: "1px solid",
    borderColor: "#000",
    borderRadius: "5px",
    margin: "15px",
    padding: "10px",
    "&:hover": {
      color: "#000 !important",
      backgroundColor: "#fff",
      border: "1px solid",
      borderColor: "#000",
    },
    "&:active": {
      color: "#fff !important",
      backgroundColor: "#000",
      border: "1px solid",
      borderColor: "#000",
    },
  },
});

const NavMenu: React.FC = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            tag={Link}
            className={classes.customLink}
            to={Paths.services}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Usługi
            </Typography>
          </NavLink>
          <NavLink tag={Link} className={classes.customLink} to={Paths.gallery}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Galeria
            </Typography>
          </NavLink>
          <NavLink tag={Link} className={classes.customLink} to={Paths.contact}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Kontakt
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavMenu;
