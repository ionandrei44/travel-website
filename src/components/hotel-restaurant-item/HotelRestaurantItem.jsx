import React from "react";

import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import hotelsLocationIcon from "../../assets/hotels-restaurants/hotels-location-icon.svg";

const HotelRestaurantItem = ({ name, location, image, ratingImage }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          width: {
            xs: "70vw",
            sm: "60vw",
            md: "auto",
          },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={image}
          alt=""
          style={{ width: "100%", objectFit: "cover", cursor: "pointer" }}
        />
      </Box>
      <Typography
        sx={{
          mt: 1.25,
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "16px",
          color: "#161414",
          maxWidth: "252px",
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          alignItems: {
            xs: "flex-start",
            lg: "center",
          },
          justifyContent: "space-between",
          gap: 1,
          mt: 1.5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <img src={hotelsLocationIcon} alt="" />
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "400",
              fontSize: "13px",
              color: "#979797",
            }}
          >
            {location}
          </Typography>
        </Box>
        <img src={ratingImage} alt="" />
      </Box>
    </Box>
  );
};

export default HotelRestaurantItem;
