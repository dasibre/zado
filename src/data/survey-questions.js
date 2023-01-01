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
    visibleIf: "{school-children} = yes",
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
  {
    name: "public-school-rating",
    title: "Do you want to include the public-school rating into your analysis?",
    type: "radiogroup",
    choices: [
      "Yes",
      "No",
      "I am not sure"
    ],
    visibleIf: "{school-children} = yes",
    isRequired: true,
  },
  {
    name: "greener-town",
    title: "Given the choice, do you prefer a greener (more trees and grass) town?",
    type: "radiogroup",
    choices: [
      "Yes, I prefer a greener town",
      "No",
      "I am indifferent"
    ],
    isRequired: true,
  },
  {
    name: "commercial-proximity",
    title: "Given the choice, do you prefer to be farthest away from businesses, factories, offices?",
    type: "radiogroup",
    choices: [
      "Yes, I prefer a house that is farthest away from commercial activities",
      "I do not mind a home near a commercial enterprise",
      "I am indifferent"
    ],
    isRequired: true,
  },
  {
    name: "residential-zoning",
    title: "Do you care how the area in which you're considering buying is zoned by the town?",
    type: "radiogroup",
    choices: [
      "Yes, I prefer the area zoned residential",
      "I do not mind if the area is zoned mixed-use",
      "I am indifferent"
    ],
    isRequired: true,
  },
  {
    name: "zoning-features",
    title: "Does the neighborhood you intend to buy from have the following family friendly features??",
    type: "checkbox",
    choices: [
      "Schools",
      "Parks",
      "Walking tracks",
      "Bike Friendly",
      "Street Lights",
      "Car-friendly",
      "Low crime rates",
      "Quiet"
    ],
    isRequired: true,
  },
  {
    name: "flooding",
    title: "Are you concerned about potential flooding issues due to proximity of the neighborhood to a lake/the sea?",
    type: "radiogroup",
    choices: [
      "Yes",
      "No",
    ],
    isRequired: true,
  },
  {
    name: "elementary-school-rating",
    title: "How are elementary schools rated in the neighbourhood the house is located in?",
    type: "radiogroup",
    choices: [
      "Great (7-8)",
      "Good (5-6)",
      "Poor (1-4)",
    ],
    visibleIf: "{school-children} = yes",
    isRequired: true,
  },
  {
    name: "middle-school-rating",
    title: "How is the Middle school rated in the neighborhood the house is located in?",
    type: "radiogroup",
    choices: [
      "Great (7-8)",
      "Good (5-6)",
      "Poor (1-4)",
    ],
    visibleIf: "{school-children} = yes",
    isRequired: true,
  },
  {
    name: "high-school-rating",
    title: "How are the High schools rated in the neighborhood the house is located in?",
    type: "radiogroup",
    choices: [
      "Great (7-8)",
      "Good (5-6)",
      "Poor (1-4)",
    ],
    visibleIf: "{school-children} = yes",
    isRequired: true,
  },
  {
    name: "distance-to-work",
    title: "Do you prefer a house with a shorter commute to work?",
    type: "radiogroup",
    choices: [
      "Yes", "No, due to other reasons", "I am indifferent",
    ],
    visibleIf: "{commute} = yes",
    isRequired: true,
  },
  {
    name: "distance-from-work",
    title: "How far is the Town/House you're considering from work?",
    type: "radiogroup",
    choices: [
      "Very far", "Communte is OK", "Not far at all",
    ],
    visibleIf: "{commute} = yes",
    isRequired: true,
  },
  {
    name: "public-transport",
    title: "Do you prefer a house with closer proximity to public transportation?",
    type: "radiogroup",
    choices: [
      "Yes", "No, due to other reasons", "I am indifferent",
    ],
    visibleIf: "{commute} = yes",
    isRequired: true,
  },
  {
    name: "home-highway-proximity",
    title: "Do you prefer a house with closer proximity to highways?",
    type: "radiogroup",
    choices: [
      "Yes", "No, due to other reasons", "I am indifferent",
    ],
    visibleIf: "{commute} = yes",
    isRequired: true,
  },
  {
    name: "home-airport-proximity",
    title: "Do you prefer a house with closer proximity to airports and train lines/stations?",
    type: "radiogroup",
    choices: [
      "Yes", "No, due to other reasons", "I am indifferent",
    ],
    visibleIf: "{commute} = yes",
    isRequired: true,
  },
  {
    name: "home-funeral-proximity",
    title: "Do you mind the proximity of your prefered house to a burial ground or a funeral home?",
    type: "radiogroup",
    choices: [
      "I prefer to be further away", "I Don’t mind", "I am indifferent",
    ],
    visibleIf: "{commute} = yes",
    isRequired: true,
  },
  {
    name: "home-street-proximity",
    title: "Do you prefer a house on a Cul-de Sac, Side Street, or major road?",
    type: "radiogroup",
    choices: [
      "Cul-de Sac", "Side Street", "Major Road",
    ],
    visibleIf: "{commute} = yes",
    isRequired: true,
  },
  {
    name: "home-bedrooms",
    title: "Are you looking for a home with the most bedrooms?",
    type: "radiogroup",
    choices: [
      "Yes ", "No", "I am indifferent",
    ],
    isRequired: true,
  },
  {
    name: "house-living-space",
    title: "All things being equal, do you prefer the house with the bigger living space?",
    type: "radiogroup",
    choices: [
      "Yes, I prefer the house with the most square footage",
      "I prefer the smaller house",
      "I am indifferent",
    ],
    isRequired: true,
  },
  {
    name: "clean-water-rating",
    title: "I prefer a town with the highest rating for clean water.",
    type: "radiogroup",
    choices: [
      "Yes",
      "I am indifferent",
    ],
    isRequired: true,
  },
  {
    name: "clean-air-rating",
    title: "I prefer a town with the highest rating for air quality.",
    type: "radiogroup",
    choices: [
      "Yes",
      "I am indifferent",
    ],
    isRequired: true,
  },
  {
    name: "superfund-sites",
    title: "I prefer a town with the least indication for superfund sites.",
    type: "radiogroup",
    choices: [
      "Yes",
      "I am indifferent",
    ],
    isRequired: true,
  },
]
};

export default questions;
