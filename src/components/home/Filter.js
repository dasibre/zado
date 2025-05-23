import { Stack } from "@mui/material";
import React from "react";
import { Button, Select } from "../commons";
import { useNavigate } from "react-router-dom";
import { townList, townPreferencesList } from "../../helper/Helper";
import { useState, useEffect } from "react";
import { equalTo, get, database, ref, orderByChild, getDocs, query, where } from '../../firebase-config';

const Filter = ({ searchValues, setSearchValues, fetchData, setShowPreferences }) => {
  const navigate = useNavigate();
  const [townOptions, setTownOptions] = useState(townList);

  useEffect(() => {
    const fetchCities = async () => {
      try {

        const dbRef = ref(database, 'cities');
        const stateQuery = query(dbRef, orderByChild('state'), equalTo("MA"));
        const snapshot = await get(stateQuery);

        if (snapshot.exists()) {
          const cities = [];
          snapshot.forEach(childSnapshot => {
            cities.push({ key: childSnapshot.key, ...childSnapshot.val() });
          });
          // console.log(cities)
          // return cities;
          setTownOptions(cities.length ? cities : townList);
        }
      } catch (err) {
        console.error('Failed to fetch towns:', err);
        setTownOptions(townList);
      }
    };

    fetchCities();
  }, []);

  const handleFilterClick = () => {
    if (typeof fetchData === 'function') {
      fetchData();
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
          options={townOptions}
          searchValues={searchValues}
          setSearchValues={setSearchValues}
          setShowPreferences={setShowPreferences}
          name="cities"
        />
        <Select
           placeholder="Select Town Preferences"
           options={townPreferencesList}
           searchValues={searchValues}
           setSearchValues={setSearchValues}
           setShowPreferences={setShowPreferences}
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
