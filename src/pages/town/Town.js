import React from "react";
import { TownCard } from "../../components/town";
import { Heading } from "../../components/commons";
import { Box, Grid, Stack } from "@mui/material";
import { Filter } from "../../components/home";
import { useState, useEffect } from "react";
import {firestore, collection, equalTo, getDocs, database, ref,get, query, limitToFirst, orderByKey, orderByChild } from '../../firebase-config';
import CircularProgress from '@mui/material/CircularProgress';

const Town = ({ searchValues, setSearchValues }) => {
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [filteredNearData, setFilteredNearData] = useState([]);

  useEffect(() => {
      fetchCities()
      fetchNearBy()
  }, []);

  async function fetchCities() {
    setLoading(true);
    const promises = searchValues.cities.map(cityName => fetchCityByName(cityName));
    return Promise.all(promises)
      .then(results => {
        const filteredCities = results.flat().filter(city => city); // Flatten the results array and filter out any empty results
        setFilteredData(filteredCities);
        setLoading(false);
        console.log('Filtered Cities:', filteredCities);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  }

  async function fetchCityByName(cityName) {
    const dbRef = ref(database, 'cities');
    const cityQuery = query(dbRef, orderByKey(), equalTo(cityName.key));
  
    return get(cityQuery)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const cityData = [];
          snapshot.forEach(childSnapshot => {
            cityData.push({
              id: childSnapshot.key, // Capture the Firebase ID
              ...childSnapshot.val() // Spread all other data
            });
          });
          return cityData; // Returns an array of cities matching the name, usually one if name is unique
        } else {
          console.log(`No data available for city: ${cityName}`);
          return [];
        }
      })
      .catch((error) => {
        console.error(`Error fetching city: ${cityName}`, error);
        return [];
      });
  }

  

  const fetchNearBy = async () => {
    try {
      setLoading(true);
       const citiesCol = collection(firestore, 'cities');
       const dbRef = ref(database, 'cities');

       let queryRef = dbRef;

      //if (selectedCities.length > 0) {
       // queryRef = query(queryRef, orderByChild('city').equalTo(selectedCities[0])); // Assuming 'city' is the field in your data node
    //  }

      const nearsnapshot = await get(query(dbRef, orderByKey(), limitToFirst(10)));
      if (nearsnapshot.exists()) {
        const data = [];
        const cities = nearsnapshot.forEach((childSnapshot) => {
          const cityData = childSnapshot.val();

            data.push({
              id: childSnapshot.key,
              ...cityData
            });
          
        });
        setFilteredNearData(data);
      }else{
        setFilteredNearData([]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <>
      <Box sx={{ background: "#F6F6F6", p: 2 }}>
        <Box sx={{ maxWidth: "1220px", margin: "auto" }}>
          <Filter
            searchValues={searchValues}
            setSearchValues={setSearchValues}
            fetchData={fetchCities}
          />
        </Box>
      </Box>
      <Stack
        py={{ xs: 3, sm: 5 }}
        gap={{ xs: 2, sm: 3, md: 4 }}
        sx={{ maxWidth: "1220px", margin: "auto", px: { xs: 2, lg: 0 } }}
      >
        <Box>
          <Heading head="Selected Towns" />
          {loading && <CircularProgress />}
          {!loading && filteredData.length > 0 ? (
            <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
              {filteredData.map((cityinfo) => {
                return (
                  <Grid item xs={12} sm={6} lg={4}>
                    <TownCard info={cityinfo}/>
                  </Grid>
                );
              })}
            </Grid>
            ) : (
              <Grid item xs={12}>
                {!loading && <p>Ooops!!! No city found per your description. Modify your filters and try again</p>}
              </Grid>
            )
          }
        </Box>
        <Box>
          <Heading head="Featured Towns" />
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {filteredNearData.map((cityinfo) => {
              return (
                <Grid item xs={12} sm={6} lg={4}>
                  <TownCard info={cityinfo}/>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default Town;
