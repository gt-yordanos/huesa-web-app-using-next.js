import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme(); // Get the current theme

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.mode === "light" ? "black" : "white",
        py: 3,
        mt: "auto",
        boxShadow: 1,
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif", // Apply Poppins font globally
      }}
    >
      <Container>
        <Typography
          variant="body2"
          color={theme.palette.mode === "light" ? "white" : "black"}
          sx={{ fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }} // Font for text
        >
          &copy; {currentYear} HUESA. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
