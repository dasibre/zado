const questions = {
  elements: [{
    name: "employed",
    title: "Are you working",
    type: "radiogroup",
    choices: [
      "yes", "no"
    ],
    isRequired: true
  }, {
    name: "commute",
    title: "Will you be commutting to work",
    type: "text",
    visibleIf: "{employed} = yes"
  },
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
