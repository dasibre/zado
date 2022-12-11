const questions = {
  elements: [{
    name: "employed",
    title: "Are you working?",
    type: "radiogroup",
    choices: [
      "Yes", "No"
    ],
    isRequired: true
  },
  {
    name: "commute",
    title: "Will you be commuting to work?",
    type: "radiogroup",
    choices: [
      "Yes", "No", "Sometimes"
    ],
    visibleIf: "{employed} = yes",
    isRequired: true
  },
  {
    name: "school-children",
    title: "Do you have school age children?",
    type: "radiogroup",
    choices: [
      "Yes", "No", "Not Right Now"
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
    name: "social-facilities",
    title: "These towns have a lot of social facilities that you like.",
    type: "radiogroup",
    choices: [
      "Yes", "No", "Indifferent"
    ],
    isRequired: true,
  },
  {
    name: "education-profile",
    title: "Would you like to include the education profile of the town residents in your analysis?",
    type: "radiogroup",
    choices: [
      "I prefer towns with the highest levels of education",
      "I prefer towns with average levels of education",
      "Indifferent",
      "No"
    ],
    isRequired: true,
  },
  {
    name: "race-composition",
    title: "Will you like to include the racial composition in your analysis?",
    type: "radiogroup",
    choices: [
      "Yes", "No"
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
  }, 
  {
    name: "recreational-facilities",
    title: "Generally, towns with places of worship, parks, and recreational facilities have a much more vibrant social life than towns without",
    type: "radiogroup",
    choices: [
      "Yes, I prefer a town with a lot of civic organizations, Parks, Recreational facilities",
      "No, I prefer a town with less civic organizations, Parks, Recreational facilities",
      "I am indifferent"
    ],
    isRequired: true,
  },
]
};

export default questions;
