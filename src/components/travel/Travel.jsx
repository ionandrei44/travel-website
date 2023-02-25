import React from "react";

import { Box, Container, Typography } from "@mui/material";

import { travelItems } from "../../data";
import TravelItem from "../travel-item";
import SecondaryButton from "../secondary-button/SecondaryButton";

const Travel = () => {
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: 8,
          flexDirection: {
            xs: "column",
            md: "row",
          },
          alignItems: "center",
          textAlign: {
            xs: "center",
            md: "left",
          },
          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "32px",
            color: "#161414",
            width: "fit-content",
          }}
        >
          Travel Tips and Advice
        </Typography>
        <SecondaryButton text="View all" />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: {
            xs: 4,
            lg: 2,
          },
          justifyContent: {
            xs: "flex-start",
            lg: "space-between",
          },
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          alignItems: {
            xs: "center",
            lg: "flex-start",
          },
        }}
      >
        {travelItems.map((travelItem) => (
          <TravelItem
            key={travelItem.id}
            text={travelItem.text}
            location={travelItem.location}
            image={travelItem.image}
            calendarText={travelItem.calendarText}
            userText={travelItem.userText}
            commentsText={travelItem.commentsText}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Travel;
