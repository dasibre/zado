import React, {useState,useEffect} from 'react';
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

  survey.onChoicesLazyLoad.add((_, options) => {
    if (options.question.getType() === "tagbox" && options.question.name === "preferred-town") {
      options.setItems(cities, 45)
    }
  });

  const surveyComplete = (sender) => {
    console.log(sender.data);
  }

  survey.onComplete.add(surveyComplete)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCities();
      const choices = data.map((city) => {
        return {
          valueName: city.one_code,
          value: city.city_name,
        }
      })
      setCities(choices.slice(0,100));
    }
    fetchData().catch(console.error);
  },[]);
  

  return (
    <>
    <Box>
      <NavBar/>
        <Stack direction="row" spacing={2} justifyContent="center">
          <SideBar survey={survey} started={started} onClick={() => start(true)}/>
          <SurveyContent survey={survey} started={started}/>
        </Stack>
    </Box>
    </>
  )
}

export default App;
