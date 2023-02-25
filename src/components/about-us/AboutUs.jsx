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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            a sapien justo. Nulla facilisis tristique imperdiet. Nullam a
            placerat odio. Sed in ex augue. Aliquam porta consectetur lorem sit
            amet ultrices. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.
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
