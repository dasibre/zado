import { initializeApp } from 'firebase/app';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { StylesManager,Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import 'survey-core/modern.min.css'


function App() {
  // pages => Group.
  // Preliminary questions Group 1
  // Town Preferences Group 2
  // Area Preferences Group 3
  // Home Preferences Group 4
  // elements => question
  const surveyJson = {
    elements: [{
      name: "FirstName",
      title: "Enter your first name:",
      type: "text"
    }, {
      name: "LastName",
      title: "Enter your last name:",
      type: "text"
    },
    {
      name: "satisfaction-score",
      title: "How would you describe your experience with our product?",
      type: "radiogroup",
      choices: [
          { value: 5, text: "Fully satisfying" },
          { value: 4, text: "Generally satisfying" },
          { value: 3, text: "Neutral" },
          { value: 2, text: "Rather unsatisfying" },
          { value: 1, text: "Not satisfying at all" }
      ],
      isRequired: true
    }
  ]
  };

  const survey = new Model(surveyJson);

  const firebaseConfig = {
    apiKey: "AIzaSyC0PyngA6tZhuNunlWNIetFnr1WGJlHXU4",
    authDomain: "zado-48f38.firebaseapp.com",
    projectId: "zado-48f38",
    storageBucket: "zado-48f38.appspot.com",
    messagingSenderId: "883365761632",
    appId: "1:883365761632:web:502ce38e285716f7d72905",
    measurementId: "G-V4457GYJ0G"
  };

  StylesManager.applyTheme("modern");

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
       <Box sx={{ bgcolor: 'info.main', width: '100%', height: '100vh', boxShadow: 3}}>
        <Survey model={survey} />;
       </Box>
     </Container>
    </>
  )
}

export default App;
