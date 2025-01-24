"use client"; // Add this directive at the top of your file to make sure it's rendered on the client side

import React from "react";
import { Button, Box, Typography, Grid, Card, CardContent, useTheme } from "@mui/material";
import dynamic from "next/dynamic"; // Import dynamic for SSR handling
import Image from "next/image";
import HeroImage1 from "@/public/Hero1.jpg";
import HeroImage2 from "@/public/Hero2.jpg";
import HeroImage3 from "@/public/Hero3.jpg";
import Link from "next/link";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Hero: React.FC = () => {
  const theme = useTheme();

  // Carousel settings
  const carouselSettings = {
    dots: true, // Pagination dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: (
      <div
        style={{
          left: "20px",
          zIndex: 10,
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
        }}
      >
        &lt;
      </div>
    ), // Custom prev button
    nextArrow: (
      <div
        style={{
          right: "20px",
          zIndex: 10,
          color: theme.palette.mode === "dark" ? "#fff" : "#000",
        }}
      >
        &gt;
      </div>
    ), // Custom next button
    customPaging: (i: number) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor:
            theme.palette.mode === "dark" ? "#fff" : "#000", // Dots color
          margin: "0 5px",
        }}
      ></div>
    ),
  };

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        bgcolor: theme.palette.background.default,
        padding: "0 30px", // Add horizontal padding to the container
      }}
    >
      <Grid container spacing={4} alignItems="stretch" justifyContent="center" maxWidth="lg">
        {/* Text Card */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 4,
              boxShadow: 3,
              borderRadius: 3,
              textAlign: "center",
              height: "100%", // Ensure both cards have the same height
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="h1"
                gutterBottom
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                Welcome to HUESA
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  color: "text.secondary",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                }}
              >
                Haramaya University Economics Students Association
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  color: "text.secondary",
                  mt: 2,
                  fontSize: { xs: "0.9rem", md: "1rem" },
                }}
              >
                HUESA stands for building social capital, supplying relevant information, and
                bridging the industry-academy gap. It’s a good and family-like community of
                economics and other College of Business and Economics students.
              </Typography>
              <Link href="/register" passHref>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  mt: 4,
                  borderRadius: "50px",
                  fontFamily: "Poppins, sans-serif",
                  textTransform: "none",
                  px: 4,
                }}
              >
                Become a Member
              </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>

        {/* Image Carousel Card */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: 3,
              overflow: "hidden",
              height: "100%",
              px: "10%",
              py: "5%",
            }}
          >
            <Slider {...carouselSettings}>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Image
                  src={HeroImage1}
                  alt="Hero Image 1"
                  style={{
                    width: "80%",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "cover",
                    margin: "0 auto",
                    marginBottom: "20px",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Image
                  src={HeroImage2}
                  alt="Hero Image 2"
                  style={{
                    width: "80%",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "cover",
                    margin: "0 auto",
                    marginBottom: "20px",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <Image
                  src={HeroImage3}
                  alt="Hero Image 3"
                  style={{
                    width: "80%",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "cover",
                    margin: "0 auto",
                  }}
                />
              </Box>
            </Slider>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
