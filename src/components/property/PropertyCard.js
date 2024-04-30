/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "../../helper/Theme";
import { townCard } from "../../helper/Constant";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ info }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <Box
      sx={{ cursor: "pointer", position: "relative", borderRadius: "25px" }}
      className={classes.cardContainer}
      onClick={() => navigate("/property")}
    >
      <Box
        sx={{
          position: "absolute",
          background: "#FFC700",
          borderRadius: { xs: "0 20px 0 20px" },
          padding: "7px 10px",
          right: "0",
          fontWeight: "600",
          fontSize: { xs: "13px", sm: "16px" },
        }}
      >
        3 Filter Matched
      </Box>
      <img src={info.image} width={"100%"} className="property_image" />
      <Box>
        <Stack
          p={"10px 12px"}
          flexDirection={"row"}
          gap={{ xs: "4px", sm: 1 }}
          flexWrap={"wrap"}
        >
          <Box className={classes.cardButton}>Quality of Public School</Box>
          <Box className={classes.cardButton}>Low Crime Rate</Box>
          <Box className={classes.cardButton}>Best Air Quality</Box>
        </Stack>
        <Box px={{ xs: 2, sm: 3 }} pb={3} pt={"5px"}>
          <Typography fontSize={{ xs: "18px", sm: "24px" }} fontWeight={"600"}>
            {info.title}
          </Typography>
          <Typography
            color={"#555555"}
            my={1}
            fontSize={{ xs: "14px", sm: "16px" }}
          >
            {info.bedrooms} bds | {info.baths} baths | {info.size} sqft
          </Typography>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              gap={{ xs: "5px", sm: 1 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
              >
                <path
                  fill="#2178cd"
                  d="M128 66a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m0-112a86.1 86.1 0 0 0-86 86c0 30.91 14.34 63.74 41.47 94.94a252.32 252.32 0 0 0 41.09 38a6 6 0 0 0 6.88 0a252.32 252.32 0 0 0 41.09-38c27.13-31.2 41.47-64 41.47-94.94a86.1 86.1 0 0 0-86-86m0 206.51C113 212.93 54 163.62 54 104a74 74 0 0 1 148 0c0 59.62-59 108.93-74 120.51"
                />
              </svg>
              <Typography fontSize={{ xs: "13px", sm: "16px" }}>
                {info.location}
              </Typography>
            </Stack>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2178cd"
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m8.293 2.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L12.586 12z"
                clip-rule="evenodd"
              />
            </svg>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyCard;
