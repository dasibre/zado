/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useStyles } from "../../helper/Theme";
import { townCard } from "../../helper/Constant";
import { useNavigate } from "react-router-dom";

const TownCard = ({info, preferences, msg, showPreferences}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  function formatCrimeRate(input) {
  const number = parseFloat(input.replace('%', ''));
  const formatted = (number / 100).toFixed(2);
  return formatted;
  }

  return (
    <Box
      sx={{ cursor: "pointer" }}
      className={classes.cardContainer}
      onClick={() => navigate(`/property?c=${info.id}&name=${info.city_name}`)}
    >
      <img src={info.image} width={"100%"} className="town_image" />
      <Box>
        <Stack
          p={"10px 12px"}
          flexDirection={"row"}
          gap={{ xs: "4px", sm: 1 }}
          flexWrap={"wrap"}
        >
          {showPreferences && preferences.map((preference) => {
            var val = info[preference.key];
            if(preference.key==='violent_crime_index'){
              var val = formatCrimeRate(info[preference.key]);
              console.log(val)
            }
            return (<Box className={classes.cardButton}>{preference.title} : {val}</Box>)
          })}
{/*           
          <Box className={classes.cardButton}>Lowest Crime</Box>
          <Box className={classes.cardButton}>Most Preferred</Box> */}
        </Stack>
        <Box px={{ xs: 2, sm: 3 }} py={"5px"}>
          <Typography
            fontSize={{ xs: "18px", sm: "24px" }}
            fontWeight={"600"}
            mb={1}
          >
            {info.city_name+", "+info.state}
          </Typography>
          <Typography color={"#555555"} fontSize={{ xs: "14px", sm: "16px" }} className="card_para">
          {msg}
          </Typography>
          <Box py={"10px"} textAlign={"end"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="#2178cd"
                fillRule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12m8.293 2.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 1 0-1.414 1.414L12.586 12z"
                clipRule="evenodd"
              />
            </svg>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TownCard;
