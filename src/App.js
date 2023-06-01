import React, {useState} from 'react';
import {Box, Stack} from '@mui/material';

import 'survey-core/modern.min.css'

import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import SurveyContent from './components/SurveyContent';
import { StylesManager, Model } from 'survey-core';
import questions from './data/survey-questions';
import { getCities } from './services/getData';
import "./App.css"

StylesManager.applyTheme("modern");

function App() {
  const [cities, setCities] = useState([]);
  const [survey] = useState(new Model(questions));
  const [pageChangeCounter, setPageChangeCounter] = React.useState(0);
  
  survey.onCurrentPageChanged.add((sender, options) => {
    setPageChangeCounter(pageChangeCounter + 1);
  });
  const [started, start] = useState(false);

  const surveyComplete = async (sender) => {
    const cityData = sender.data['preferred-town'].map(id => getCities(id).then(data => data));
    await Promise.all(cityData).then(function(results) {
      setCities(results);
    })
  }

  survey.onComplete.add(surveyComplete)


  return (
    <>
    <Box>
      <NavBar/>
        <Stack direction="row" spacing={2} justifyContent="center">
          <SideBar survey={survey} started={started} onClick={() => start(true)}/>
          <SurveyContent survey={survey} started={started}/>
          <Box p={2} flex={2}>
            {cities.map(city => <div>{city.city_name}</div>)}
          </Box>
        </Stack>
    </Box>
    </>
  )
}

export default App;
