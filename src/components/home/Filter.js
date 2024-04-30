import { Stack } from "@mui/material";
import React from "react";
import { Button, Select } from "../commons";
import { useNavigate } from "react-router-dom";
import { townList, townPreferencesList } from "../../helper/Helper";
import { useState } from "react";

const Filter = ({ searchValues, setSearchValues, fetchData }) => {
  const navigate = useNavigate();

  const handleFilterClick = () => {
    if (typeof fetchData === 'function') {
      fetchData();
    } else {
      console.error('fetchData function is not available');
    }
  };
  return (
    <>
      <Stack
        flexDirection={{ md: "row" }}
        width={"100%"}
        gap={{ xs: 2, sm: 3 }}
        alignItems={{ xs: "center", md: "unset" }}
      >
         <Select
           placeholder="Enter Top 5 Towns/Cities"
          options={townList}
          searchValues={searchValues}
          setSearchValues={setSearchValues}
          name="cities"
        />
        <Select
           placeholder="Select Town Preferences"
           options={townPreferencesList}
          searchValues={searchValues}
           setSearchValues={setSearchValues}
           name="preferences"
        />
        <Button
          buttonName="Search Result"
          onClick={() => {
            handleFilterClick()
            navigate("/town")
            
          }}
          style={{ maxHeight: 44 }}
        />
      </Stack>
    </>
  );
};

export default Filter;
