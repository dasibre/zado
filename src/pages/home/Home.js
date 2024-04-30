import React from "react";
import { Stack, Typography } from "@mui/material";
import { Filter } from "../../components/home";

const Home = ({ searchValues, setSearchValues }) => {
  return (
    <>
      <Stack
        height={"calc(100vh - 65px)"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ maxWidth: "1220px", margin: "auto", p: { xs: 2, lg: 0 } }}
      >
        <Typography fontSize={{ xs: "18px", sm: "22px", md: "26px" }}>
          Explore - Select - Settle
        </Typography>
        <Typography
          fontSize={{ xs: "28px", sm: "35px", md: "42px" }}
          color={"primary"}
          fontWeight={"600"}
          textAlign={"center"}
        >
          Discover Your Dream Property
        </Typography>
        <Stack mt={5} width={"100%"} mb={10}>
          <Filter
            searchValues={searchValues}
            setSearchValues={setSearchValues}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Home;
