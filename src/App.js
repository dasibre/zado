import { initializeApp } from 'firebase/app';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { StylesManager,Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/modern.min.css'
import questions from './data/survey-questions';

StylesManager.applyTheme("modern");

function App() {
  const survey = new Model(questions);

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
    <CssBaseline />
     <Container maxWidth="lg">
       <Box sx={{color: 'black', width: '100%', height: '20vh', boxShadow: 1}}>
         <div>
         <Typography variant="h1" gutterBottom>
          Zado
          <Typography variant="subtitle2" gutterBottom>
            Let us help you choose the best place for you and your family to live.
          </Typography>
         </Typography>
         </div>
       </Box>
       <Box sx={{width: '100%', height: '450vh', boxShadow: 3}}>
        <Survey model={survey} />
       </Box>
     </Container>
    </>
  )
}

export default App;
