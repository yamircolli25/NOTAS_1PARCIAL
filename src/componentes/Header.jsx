import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../index.css";

// Definición del componente Header como un Functional Component de React
export const Header: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar className="AppBar">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography variant="h6" sx={{ flexGrow: 1 }} className="AppBarTitulo">
              <h1>APP NOTAS</h1>
            </Typography>
          </Link>
        </Toolbar>

        <Toolbar className="AppBar">
          <Typography variant="h5">Bienvenido al Sistema de Notas</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
