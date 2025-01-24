import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
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
  Typography,
  ListItemText
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
import Link from "next/link";

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
    textDecoration: "none", // Remove underline
    display: isMobile ? "block" : "inline-block", // Full width on mobile
    width: isMobile ? "100%" : "auto", // Full width on mobile
    padding: isMobile ? "10px 0" : "0", // Add padding for mobile links
    color: isDarkMode ? "black" : "white", // Set color based on theme
  };

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: theme.palette.primary.main }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, flexGrow: 0 }}>
            <IconButton
              edge="start"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { sm: "none" }, color: isDarkMode ? "black" : "white" }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: "flex",
                justifyContent: isMobile ? "center" : "flex-start",
                alignItems: "center",
                flexGrow: 0,
                width: "100%",
              }}
            >
              <img
                src="/huesaLogo.jpg"
                alt="HUESA Logo"
                width={isMobile ? "40" : "50"}
                height={isMobile ? "40" : "50"}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 3,
              alignItems: "center",
              justifyContent: "center",
              flexGrow: 2,
            }}
          >
            {navLinks.map((link) => (
              <Link href={link.path} key={link.text} passHref>
                <ListItemButton
                  sx={{
                    ...linkStyle,
                    borderBottom: selectedLink === link.text ? "3px solid #FF7251" : "none",
                    "&:hover": { borderBottom: "3px solid #FF7251" },
                  }}
                  onClick={() => setSelectedLink(link.text)}
                >
                  <Typography
                    sx={{
                      ...linkStyle,
                      color: isDarkMode ? "black" : "white",
                    }}
                  >
                    {link.text}
                  </Typography>
                </ListItemButton>
              </Link>
            ))}
            
            <Link href="/register" passHref>
              <Button
              variant="contained"
              sx={{
                ...linkStyle,
                textTransform: "none",
                backgroundColor: isDarkMode ? "black" : "white",
                color: isDarkMode ? "white" : "black",
                px: 2,
                py: 1,
                "&:hover": { backgroundColor: isDarkMode ? "#333" : "#ddd" },
              }}
            >
                Register Now
              </Button>
            </Link>  
          </Box>

          <IconButton onClick={toggleDarkMode} sx={{ color: isDarkMode ? "black" : "white" }}>
            {isDarkMode ? <Brightness7Icon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    setSelectedLink(link.text);
                    setDrawerOpen(false);
                  }}
                  sx={{
                    width: "100%", // Full width
                    display: "flex",
                    alignItems: "center", // Align icon and text on the same line
                    gap: 1, // Space between icon and text
                    "&:hover": {
                      backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
                    },
                  }}
                >
                  <Link href={link.path} passHref>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
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
                            }}
                          >
                            {link.text}
                          </Typography>
                        }
                      />
                    </Box>
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  setSelectedLink("Register Now"); // Set it as selected when clicked
                  setDrawerOpen(false);
                }}
                sx={{
                  width: "100%", // Full width
                  display: "flex",
                  alignItems: "center", // Align icon and text on the same line
                  gap: 1, // Space between icon and text
                  "&:hover": {
                    backgroundColor: isDarkMode ? "#333" : "#f5f5f5",
                  },
                }}
              >
                <Link href="/register" passHref>
                  <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                    <ListItemIcon
                      sx={{
                        color: selectedLink === "Register Now" ? "#FF7251" : isDarkMode ? "white" : "black",
                      }}
                    >
                      <RegisterIcon /> {/* You can replace this with any icon */}
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
                  </Box>
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
    </Drawer>
    </>
  );
};

export default Navbar;