import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import './styles.css';
import Divider from '@mui/material/Divider';

import {List , ListItem , ListItemButton, ListItemText, ListItemIcon}  from '@mui/material';

import {Home, DirectionsCar, Settings} from '@mui/icons-material';

import {useNavigate} from "react-router-dom";

import { Drawer } from '@mui/material';


export default function Navbar() {
  const Navigate = useNavigate();

  const [menu, setMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuLateral = () => setMenu(!menu);

  const redirecionar = (url) => {
    Navigate(url);
    setMenu(false);
  }
  return (
    <Box sx={{ flexGrow: 1 }}>

      <Drawer onClose={handleMenuLateral} open={menu}>
        <div className='Menu'>       
        <List>
          <ListItemButton onClick={() => redirecionar('/')}>
            <ListItemIcon><Home/></ListItemIcon>
            <ListItemText>Veiculos</ListItemText>
          </ListItemButton>
        </List>

        <List>
          <ListItemButton onClick={() => redirecionar('/listar')}>
            <ListItemIcon><DirectionsCar/></ListItemIcon>
            <ListItemText>Veiculos</ListItemText>
          </ListItemButton>
        </List>

        <List>
          <ListItemButton onClick={() => redirecionar('/config')}>
            <ListItemIcon><Settings/></ListItemIcon>
            <ListItemText>Configurações</ListItemText>
          </ListItemButton>
        </List>
        <Divider/>
  
      </div>
    </Drawer>

 

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuLateral}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minha Garagem
          </Typography>
          
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={() => {handleClose(); redirecionar('/entrar')}}>Desconectar</MenuItem>
              </Menu>
            </div>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
