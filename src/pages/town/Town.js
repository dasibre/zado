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
      .then(async results => {
        const filteredCities = results.flat().filter(city => city); // Flatten the results array and filter out any empty results
        setFilteredData(filteredCities);
        setLoading(false);

        if(searchValues['preferences'].length>0){

          const qualityOfSchoolsItem = searchValues['preferences'].find(item => item.key === 'rating');
          const hasQualityOfSchools = qualityOfSchoolsItem !== undefined;
          if(hasQualityOfSchools){
            await fetchSchoolInfo(); 
          }else{
            sortCitiesByPreferences(filteredData);
          }
          
          
        }
       
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  }

  function sortCitiesByPreferences(cities) {
    cities.sort((a, b) => {
      const aSum = sumPreferences(a);
      const bSum = sumPreferences(b);
      return bSum-aSum // Decending order
    });
    setFilteredData(cities);
    return cities;
  }

  function sumPreferences(city) {
    return searchValues['preferences'].reduce((acc, rule) => {

      const value = parseFloat(city[rule.key]);
      console.log(city)
      console.log(rule.key)
      console.log('this is being called'+value)
        if (!isNaN(value)) {
          console.log(value)
          return acc + value;
        }
      return acc;
    }, 0);
  }

  const fetchSchoolData = async (state, city) => {
    try {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://gs-api.greatschools.org/schools?state=${state}&city=${city}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'HWSMtmCPvt1jNYnpFWnZRaBc9eoqC8wm4mfBycf8'
        }
      });
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return Array.isArray(data.schools) ? data.schools : [];
    } catch (error) {
      console.error("Error fetching data:", error);
      // setError(error);
      return null;
    }
  };

  const fetchSchoolInfo = async () => {
    try {
      const updatedCities = await Promise.all(filteredData.map(async (_selectedCities) => {
        const { state, city_name } = _selectedCities;
        const schools = await fetchSchoolData(state, city_name);
        // const totalRatings = schools.reduce((acc, school) => acc + parseInt(school.rating, 10), 0);
        const publicSchools = schools.filter(school => school.type === 'public');
        const valuedRates = publicSchools.filter(school => school.rating != null)
        const totalRatings = valuedRates.reduce((acc, school) => {
          const rating = parseInt(school.rating, 10);
          return acc + (isNaN(rating) ? 0 : rating);
        }, 0);
        const averageRating = valuedRates.length > 0 ? totalRatings / valuedRates.length : 0;
        return { ..._selectedCities, rating: averageRating.toFixed(2)};
      }));
      // console.log(updatedCities)
      setFilteredData(updatedCities);
      sortCitiesByPreferences(updatedCities);
    } catch (error) {
      console.error("Error calculating total food:", error);
      // setError(error);
    }

    setLoading(false);
  };

  

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
