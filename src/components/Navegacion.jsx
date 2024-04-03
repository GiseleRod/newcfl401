import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import {  Link } from "react-router-dom";
import Logo from "../assest/logo120x120.png"
import { createTheme, ThemeProvider } from '@mui/material/styles';



const pages = ['Home', 'Institucional','Contacto'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navegacion() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    const theme = createTheme({

        palette: {

            primary: {
                contrastText: "#303AF2;",
                // Purple and green play nicely together.
                main: "#fff",
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
            <AppBar position="static" sx={{ boxShadow: "none", paddingTop: "2rem" }} >
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
                                    height: "120px",
                                    width: "120px",

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
                                    <Link to={`/${page}`} className='Link_Button' key={page}>
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" color="var(--azul)">{page}</Typography>
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
                                    height: "100px",
                                    width: "100px",
                                    mr: 3,

                                }}
                                alt="Logo"
                                src={Logo}
                            >

                            </Box>
                        </Box>

                        <Box sx={{
                            flexGrow: 1, display: { xs: 'none', md: 'flex' },
                            paddingLeft: "2rem"
                        }}>
                            {pages.map((page) => (
                                <Link to={`/${page}`} className='Link_Button' key={page}>
                                    <Button

                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, display: 'block' }}
                                    >
                                        <Typography variant='h5' fontWeight={600} color=" var(--azul)">
                                            {page}
                                        </Typography>
                                    </Button>
                                </Link>

                            ))}
                           

                        </Box>
                        
                    </Toolbar>

                </Container>
            </AppBar>

        </ThemeProvider>


    );
}

export default Navegacion