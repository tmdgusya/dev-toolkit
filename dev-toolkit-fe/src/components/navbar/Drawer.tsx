import React from "react";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

interface DrawerListProps {
    toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export const DrawerList = ({toggleDrawer} : DrawerListProps) => {
    const settings = ['Json', 'Notification', 'Terminal'];

    return (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {settings.map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <Link to={`/${text.toLowerCase()}`} style={{ textDecoration: "none" }}> {/* Wrap ListItemButton with Link */}
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <MenuIcon /> : <MenuIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};
