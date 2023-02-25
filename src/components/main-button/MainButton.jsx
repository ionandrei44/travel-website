import React from "react";

import { Button } from "@mui/material";

const MainButton = ({ iconImg, text }) => {
  return (
    <Button
      variant="contained"
      sx={{
        width: {
          xs: "100%",
          md: "auto",
        },
        backgroundColor: "#7B61FF",
        p: {
          xs: 1.5,
          md: 3,
        },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        borderRadius: "12px",
        fontFamily: "inherit",
        fontSize: "18px",
        fontWeight: "600",
        "&.MuiButtonBase-root:hover": {
          backgroundColor: "#7B61FF",
        },
      }}
    >
      <img src={iconImg} alt="" />
      {text}
    </Button>
  );
};

export default MainButton;
