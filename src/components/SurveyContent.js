import React from 'react';
import {Box} from '@mui/material';
import { Survey } from 'survey-react-ui';
function SurveyContent(props) {
    return (
            <Box p={2} flex={2}>
                {
                  props.started ? (<Survey model={props.survey} />) : (<img src="https://placeholder.pics/svg/960x450" alt="content"/>)
                }
           </Box>
           )
 }

 export default SurveyContent;

// Change page
// survey.pages => List of PageModels with functions
