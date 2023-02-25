import React from "react";

import { Box, Typography } from "@mui/material";

const SearchNavItem = ({ normalText, boldText, iconImg }) => {
  return (
    <Box
      sx={{
        p: {
          xs: 0.5,
          lg: 2,
        },
        my: {
          xs: 1,
          md: 0,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <img src={iconImg} alt="" />
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "300",
            fontSize: "14px",
            color: "#5B5B5B",
          }}
        >
          {normalText}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "16px",
            color: "#161414",
          }}
        >
          {boldText}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchNavItem;
