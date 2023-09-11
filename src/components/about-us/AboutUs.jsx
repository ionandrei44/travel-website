import React from "react";

import { Box, Container, Typography } from "@mui/material";

import SecondaryButton from "../secondary-button/SecondaryButton";
import aboutUsImg from "../../assets/main/about-us-img.svg";

const AboutUs = () => {
  return (
    <Container
      disableGutters
      maxWidth="lg"
      sx={{
        px: {
          xs: 2,
          sm: 5,
          md: 3.5,
        },
        my: 15,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "center",
          gap: 4,
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "48px",
              color: "#161414",
              textAlign: {
                xs: "center",
                md: "left",
              },
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "32px",
              color: "#5B5B5B",
              my: 4,
            }}
          >
          We’re here to hand-hold you through the beautiful yet overwhelming process of decorating your
home. We understand it is a huge milestone in life to buy your home and every element in it
plays a role. Over the past 8 years, we have been a part of this precious journey for thousands of
homeowners from choosing the right designer, fitting the designs with their space, executing
the furniture; and all this in the most seamless and cost effective way.
We combine our understanding of your requirements, aspirations with expertise for homebuyers
to make their dream home ideas become a reality. Making home interiors easy, HomeLane is
India’s premier end to end home interiors platform which delivers your chosen home interiors
within 45 days, or we pay you rent. Our tech-empowered teams have delivered over 25,000
homes with 100+ product vendors,In just 8 years we have opened our showrooms in 28+ cities and we have a total of 45+
experience centers pan-India. Voted as the best brand in the interiors category by Economic
Times (2022), we are just getting started. Visit us on www.homelane.com to book your first free
online design consultation.
          </Typography>
          <SecondaryButton text="Read more" />
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src={aboutUsImg}
            alt=""
            style={{
              borderRadius: "24px",
              maxWidth: "100%",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
