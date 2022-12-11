const questions = {
  elements: [{
    name: "employed",
    title: "Are you working",
    type: "radiogroup",
    choices: [
      "yes", "no"
    ],
    isRequired: true
  },
  {
    name: "commute",
    title: "Will you be commutting to work?",
    type: "radiogroup",
    choices: [
      "yes", "no"
    ],
    isRequired: true,
    visibleIf: "{employed} = yes"
  },
  {
    name: "school-children",
    title: "Do you have school age children?",
    type: "radiogroup",
    choices: [
      "yes", "no"
    ]
  },
  {
    name: "preferred-town",
    title: "What town do you want to buy a house in?",
    type: "tagbox",
    description: "Select between 1 and 5 towns",
    choices: ["Queens Village","Bronx", "Harlem", "Brooklyn"],
    colCount: 2,
    validators: [
      {
        "type": "answercount",
        "minCount": 1,
        "maxCount": 2
      }
    ]
  },
  {
    name: "race-composition",
    title: "Will you like to include the racial composition in your analysis?",
    type: "radiogroup",
    choices: [
      "yes", "no"
    ],
    isRequired: true,
  },
  {
    name: "racial-diversity",
    title: "Please specify your preferred racial diversity of the town you prefer the most?",
    type: "radiogroup",
    choices: [
      "diverse", "black", "white", "non-white", "dont-care"
    ],
    visibleIf: "{race-composition} = yes"
  }
]
};

export default questions;
