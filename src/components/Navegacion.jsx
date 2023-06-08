import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {NavLink,Route,Routes,Router,Link,useLocation} from "react-router-dom";
import Logo from "../assest/logoCFL.png"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Home from '../Page/Home';

const pages = ['Home', 'Institucional', 'Contactos'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navegacion() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    
   
    const theme = createTheme({
       
        palette: {
          
          primary: {
            contrastText:"#303AF2;",
            // Purple and green play nicely together.
            main:"#fff",
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
          },
        },
      });
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
      
        <ThemeProvider theme={theme}>
        <AppBar position="static" sx={{boxShadow:"none"}}>
            <Container maxWidth="xl" >
           
                <Toolbar disableGutters>
                    <Box
                        component="a"
                        sx={
                            {
                            display: { xs: 'none', md: 'flex' },
                            mr: 1
                            }
                        }
                        href='/'
                    >
                        <Box
                            component="img"
                            sx={{
                                height: "60px",
                                width: "60px",

                            }}
                            alt="Logo"
                            src={Logo}
                        >
                        </Box>
                    </Box>


                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                 <Link to={`/${page}`} className='Link_Button'>
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Box
                        component="a"
                        sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 2,
                            justifyContent: "center",
                            
                        }}>
                        <Box
                            component="img"
                            sx={{
                                height: "60px",
                                width: "60px",
                                mr: 3,

                            }}
                            alt="Logo"
                            src={Logo}
                        >

                        </Box>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link to={`/${page}`} className='Link_Button'>
                             <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: '#1976d2', display: 'block' }}
                            >
                                {page}
                            </Button>
                            </Link>
                           
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
              
            </Container>
        </AppBar>
       
        </ThemeProvider>
      
       
    );
}

export default Navegacion