import React from 'react';
import {Box,Typography,Button} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

const handleClose = (e) => console.log(e);
function SideBar(props) {
    return <Box bgcolor="white" p={2} flex={1} sx={{
        display: {xs: "none", sm: "block"}
    }}>
        {
          props.started ? (
                  <>
                  <MenuItem selected={true} onClick={handleClose}>Personal Information</MenuItem>
                  <MenuItem onClick={handleClose}>Work</MenuItem>
                  <MenuItem onClick={handleClose}>Family</MenuItem>
                  <MenuItem onClick={handleClose}>Preferences</MenuItem>
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
