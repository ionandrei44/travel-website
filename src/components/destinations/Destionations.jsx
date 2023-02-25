import React from "react";

import { Box, Container, Typography } from "@mui/material";

import { destinations } from "../../data";
import DestinationItem from "../destination-item";

const Destionations = () => {
  return (
    <Container
      disableGutters
      maxWidth="xl"
      sx={{
        px: {
          xs: 2,
          sm: 5,
          md: 10,
        },
        my: 15,
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: "600",
          fontSize: "32px",
          color: "#161414",
          mb: 8,
          textAlign: {
            xs: "center",
            md: "left",
          },
        }}
      >
        Popular Destinations
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: 4,
            md: 1,
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "center",
            md: "flex-start",
          },
        }}
      >
        {destinations.map((destination) => (
          <DestinationItem
            key={destination.id}
            name={destination.name}
            location={destination.location}
            image={destination.image}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Destionations;
