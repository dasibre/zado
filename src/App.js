import React, {useState} from 'react';
import { initializeApp } from 'firebase/app';
import {Box, Stack} from '@mui/material';
import 'survey-core/modern.min.css'
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import SurveyContent from './components/SurveyContent';

function App() {
  const [started, start] = useState(false);
  const firebaseConfig = {
    apiKey: "AIzaSyC0PyngA6tZhuNunlWNIetFnr1WGJlHXU4",
    authDomain: "zado-48f38.firebaseapp.com",
    projectId: "zado-48f38",
    storageBucket: "zado-48f38.appspot.com",
    messagingSenderId: "883365761632",
    appId: "1:883365761632:web:502ce38e285716f7d72905",
    measurementId: "G-V4457GYJ0G"
  };

  // StylesManager.applyTheme("defaultV2")

  // Initialize Firebase; const app = initializeApp(firebaseConfig);

initializeApp(firebaseConfig);
  return (
    <>
    <Box>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="center">
            <SideBar started={started} onClick={() => start(true)}/>
            <SurveyContent started={started}/>
        </Stack>
    </Box>
    </>
  )
}

export default App;
