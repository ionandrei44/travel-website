import React from "react";

import { Box, Typography } from "@mui/material";

const DestinationItem = ({ name, location, image }) => {
  return (
    <Box>
      <Box
        sx={{
          width: {
            xs: "70vw",
            sm: "60vw",
            md: "auto",
          },
        }}
      >
        <img
          src={image}
          alt=""
          style={{
            width: "100%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: "500",
          fontSize: "16px",
          color: "#161414",
        }}
      >
        {name}
      </Typography>
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
  );
};

export default DestinationItem;
