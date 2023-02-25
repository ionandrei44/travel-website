import React from "react";

import { Button } from "@mui/material";

import btnArrowIcon from "../../assets/main/btn-arrow-icon.svg";

const SecondaryButton = ({ text }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: {
          xs: "100%",
          md: "auto",
        },
        backgroundColor: "#F6F4FF",
        textTransform: "none",
        p: 1.25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
        borderRadius: "12px",
        fontFamily: "inherit",
        fontSize: "16px",
        fontWeight: "400",
        color: "#5243C2",
        "&.MuiButtonBase-root:hover": {
          backgroundColor: "#F6F4FF",
        },
      }}
    >
      {text}
      <img src={btnArrowIcon} alt="" />
    </Button>
  );
};

export default SecondaryButton;
