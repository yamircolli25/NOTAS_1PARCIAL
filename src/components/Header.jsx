import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../index.css";

export const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="AppBar">
          <Link to="/" >
            <Typography variat="h6" sx={{ flexGrow: 1 }} className="AppBarTitulo"> <h1>APP NOTAS </h1></Typography>
          </Link>
        </Toolbar>

        <Toolbar className="AppBar">
          <h2>Bienvenido al Sistema de Notas</h2>
        </Toolbar>
      </AppBar>

    </>
  );
};

export default Header;