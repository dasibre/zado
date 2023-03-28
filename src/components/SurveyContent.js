import React from 'react';
import {Box} from '@mui/material';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import questions from '../data/survey-questions';

StylesManager.applyTheme("modern");
function SurveyContent(props) {
    const survey = new Model(questions);
    return (
            <Box p={2} flex={2}>
                {
                  props.started ? (<Survey model={survey} />) : (<img src="https://placeholder.pics/svg/960x450" alt="content"/>)
                }
           </Box>
           )
 }

 export default SurveyContent;

