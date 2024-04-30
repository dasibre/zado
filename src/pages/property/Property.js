import React from "react";
import { Heading } from "../../components/commons";
import { Box, Grid, Stack } from "@mui/material";
import { PropertyCard } from "../../components/property";
import { buildings } from "../../helper/Helper";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

const Property = () => {
  const [filteredProperties, setFilteredProperties] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const town_id = searchParams.get('c');
  const town_name = searchParams.get('name');

  console.log(town_id)

  useEffect(() => {
    // Filter properties based on town_id
    const filtered = buildings.filter(property => property.town_id === town_id);
    setFilteredProperties(filtered);
  }, [buildings, town_id]);

  return (
    <>
      <Stack
        py={{ xs: 3, sm: 5 }}
        gap={{ xs: 2, sm: 3, md: 4 }}
        sx={{ maxWidth: "1220px", margin: "auto", px: { xs: 2, lg: 0 } }}
      >
        <Box>
          <Heading head={town_name + " - (" +filteredProperties.length + ")"} />
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {filteredProperties.map((info) => {
              return (
                <Grid item xs={12} sm={6}>
                  <PropertyCard info={info} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default Property;
