import React from 'react';
import {Box,Typography,Button} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const changeToPage = (survey) => {
    return (e) => {
        survey.currentPage = e.target.id;
    }
};
function SideBar(props) {
    const handleOnclick = changeToPage(props.survey);
    let selected = props.survey.currentPage.name;
    return <Box bgcolor="white" p={2} flex={1} sx={{
        display: {xs: "none", sm: "block"}
    }}>
        {
          props.started ? (
                  <>
                  <MenuItem id="personal" selected={selected === "personal" ? true : undefined} onClick={handleOnclick}>Personal Information</MenuItem>
                  <MenuItem id="work" selected={selected === "work" ? true : undefined} onClick={handleOnclick}>Work</MenuItem>
                  <MenuItem id="family" selected={selected === "family" ? true : undefined} onClick={handleOnclick}>Family</MenuItem>
                  <MenuItem id="preferences" selected={selected === "preferences" ? true : undefined} onClick={handleOnclick}>Preferences</MenuItem>
                  </>
                  ) : (
                          <>
                          <Typography variant="body1" gutterBottom>
                              How do you decide which which home is the right one for you?
                              If you don't really know what you're looking for in a home,
                              how do you even find the right one or even the right town?
                          </Typography>
                          <Typography variant="body1" gutterBottom>
                              This tool guides you to consider the critical and minimal factors a
                              discerning buyer should consider such as quality of air and water,
                              neighborhood, crime rate, schools, town amenities, and diversity.
                              The tool ranks towns and homes to match the critical factors that are important to you.
                          </Typography>
                          <Button onClick={props.onClick} variant="outlined">Get Started</Button>
                          </>
                          )
        }
    </Box>
}

export default SideBar;
