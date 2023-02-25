import React from "react";

import { Box, Typography } from "@mui/material";

import calendarIcon from "../../assets/travel/calendar-icon.svg";
import userIcon from "../../assets/travel/user-icon.svg";
import commentsIcon from "../../assets/travel/comments-icon.svg";

const TravelItem = ({
  text,
  image,
  location,
  calendarText,
  userText,
  commentsText,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Box>
        <img
          src={image}
          alt=""
          style={{
            objectFit: "cover",
            height: "100%",
            maxWidth: "100%",
            cursor: "pointer",
          }}
        />
      </Box>
      <Box sx={{ position: "relative", maxWidth: "320px" }}>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "20px",
            color: "#161414",
            mb: 2,
          }}
        >
          {location}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "400",
            fontSize: "16px",
            color: "#5B5B5B",
            lineHeight: "32px",
            pb: 7,
          }}
        >
          {text}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
            }}
          >
            <img src={calendarIcon} alt="" />
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
                color: "#878787",
              }}
            >
              {calendarText}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
            }}
          >
            <img src={userIcon} alt="" />
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
                color: "#878787",
              }}
            >
              {userText}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.75,
            }}
          >
            <img src={commentsIcon} alt="" />
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "400",
                fontSize: "12px",
                color: "#878787",
              }}
            >
              {commentsText}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TravelItem;
