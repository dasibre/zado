const questions = {
  elements: [{
    name: "employed",
    title: "Are you working?",
    type: "radiogroup",
    choices: [
      "Yes", "No"
    ],
    isRequired: true
  }, {
    name: "commute",
    title: "Will you be commutting to work?",
    type: "radiogroup",
    choices: [
      "Yes",  "No", "Sometimes"
    ],
    isRequired: true
  }, {
    name: "school age children",
    title: "Do you have school-age children who will be attending a school in the town you buy the house in?",
    type: "radiogroup",
    choices: [
      "Yes",  "No", "Not right now"
    ],
    isRequired: true
  }, {}
  {
    name: "satisfaction-score",
    title: "What are your preferred neighborhoods?",
    type: "radiogroup",
    choices: [
        { value: 5, text: "Queens Village" },
        { value: 4, text: "Harlem" },
        { value: 3, text: "Bronx" }
    ],
    isRequired: true
  }
]
};

export default questions;
