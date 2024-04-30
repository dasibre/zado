import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ head }) => {
  return (
    <>
      <Typography
        fontSize={{ xs: "22px", sm: "28px", md: "34px" }}
        fontWeight={"600"}
        mb={{ xs: 1, sm: 2 }}
      >
        {head}
      </Typography>
    </>
  );
};

export default Heading;
