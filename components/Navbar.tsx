import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  ListItemText,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as Brightness7Icon,
  Home as HomeIcon,
  Info as InfoIcon,
  Event as EventIcon,
  MailOutline as MailIcon,
  PersonAdd as RegisterIcon,
} from "@mui/icons-material";
import { useThemeContext } from "@/contexts/themeContext";

const Navbar: React.FC = () => {
  const { toggleDarkMode, isDarkMode } = useThemeContext();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<string>("");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navLinks = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "About Us", icon: <InfoIcon />, path: "/about" },
    { text: "Events", icon: <EventIcon />, path: "/events" },
    { text: "Contact Us", icon: <MailIcon />, path: "/contact" },
  ];

  const linkStyle = {
    fontSize: "1rem",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    cursor: "pointer",
    textTransform: "none",
    borderBottom: "3px solid transparent",
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo and Menu Icon */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton
              edge="start"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { sm: "none" }, color: isDarkMode ? "black" : "white" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ...linkStyle, color: isDarkMode ? "black" : "white" }}>
              HUESA
            </Typography>
          </Box>

          {/* Desktop Navigation Links */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3, alignItems: "center" }}>
            {navLinks.map((link) => (
              <Typography
                key={link.text}
                onClick={() => setSelectedLink(link.text)}
                sx={{
                  ...linkStyle,
                  color: isDarkMode ? "black" : "white",
                  borderBottom: selectedLink === link.text ? "3px solid #FF7251" : "none",
                  "&:hover": { borderBottom: "3px solid #FF7251" },
                }}
              >
                {link.text}
              </Typography>
            ))}
            <Button
              variant="contained"
              sx={{
                ...linkStyle,
                textTransform: "none",
                backgroundColor: isDarkMode ? "black" : "white",
                color: isDarkMode ? "white" : "black",
                px: 2, // Add padding for better alignment
                "&:hover": { backgroundColor: isDarkMode ? "#333" : "#ddd" },
              }}
            >
              Register Now
            </Button>
          </Box>

          {/* Dark Mode Toggle */}
          <IconButton onClick={toggleDarkMode} sx={{ color: isDarkMode ? "black" : "white" }}>
            {isDarkMode ? <Brightness7Icon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.text} disablePadding>
                <ListItemButton
                  onClick={() => setSelectedLink(link.text)}
                  sx={{
                    "&:hover": {
                      backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: selectedLink === link.text ? "#FF7251" : isDarkMode ? "white" : "black",
                    }}
                  >
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText
  primary={
    <Typography
      sx={{
        ...linkStyle,
        color: selectedLink === link.text ? "#FF7251" : isDarkMode ? "white" : "black",
        fontFamily: "Poppins, sans-serif",  // Explicitly set the font family
        fontWeight: "bold",  // Explicitly set the font weight to bold
      }}
    >
      {link.text}
    </Typography>
  }
/>

                </ListItemButton>
              </ListItem>
            ))}
            
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => setSelectedLink("Register Now")}
                sx={{
                  "&:hover": {
                    backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color:
                      selectedLink === "Register Now" ? "#FF7251" : isDarkMode ? "white" : "black",
                  }}
                >
                  <RegisterIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        ...linkStyle,
                        color: selectedLink === "Register Now" ? "#FF7251" : isDarkMode ? "white" : "black",
                      }}
                    >
                      Register Now
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
