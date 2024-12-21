"use client"

import { useState } from "react";
import { navItems } from "@/config/constants";
import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material"
// Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AdjustIcon from '@mui/icons-material/Adjust';

interface Props {
    window?: () => Window;
}

const Navbar = ({ window }: Props) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '20px' }}>
                <Box sx={{ my: 2, display: 'flex', alignItems: 'center', gap: "5px" }}>
                    <AdjustIcon fontSize="medium" />
                    <Typography variant="h6">JasurCoder</Typography>
                </Box>
                <CloseIcon />
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.route} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box height={'10vh'} sx={{ display: 'flex' }}>
            <AppBar sx={{ height: '10vh', backgroundColor: '#141414' }} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ my: 2, alignItems: 'center', gap: "5px", flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
                        <AdjustIcon fontSize="medium" />
                        <Typography variant="h6">JasurCoder</Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item.route} sx={{ color: '#fff' }}>
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    )
}

export default Navbar