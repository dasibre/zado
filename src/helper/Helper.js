export const townList = [
  { title: "Foxborough", key:"69600243" },
  { title: "Fredonia", key:"50128120" },
  { title: "Auburn", key:"69903963" },
  { title: "Sharon", key:"69600250" },
  { title: "Providence", key:"54459000" },
  { title: "Boston", key:"52507000" },
];

export const townPreferencesList = [
  { title: "Quality of Public School", groupName: "", key:"" },
  { title: "Crime Rate", groupName: "", key:"" },
  { title: "Air Quality", groupName: "", air_quality: true,  key:"air_quality", unit:'int' },
  { title: "Water Quality", groupName: "", water_quality: true, key:"water_quality", unit:'int'},
  { title: "Superfund Sites", groupName: "", superfund_sites:true, key:"superfund_sites", unit:'int' },
  { title: "Nature Trees", groupName: "", key:"" },
  { title: "Zoned Residential", groupName: "", key:"" },
  { title: "Civic Organizations", groupName: "", key:"" },
  { title: "Public Transportation", groupName: "", key:"" },
  { title: "Social Facilities", groupName: "", key:"" },
  { title: "Most Diverse", groupName: "Racial Composition", key:"racial" },
  { title: "Most Whites", groupName: "Racial Composition", key:"white" },
  { title: "Most Blacks", groupName: "Racial Composition", black:true, key:"black" },
  { title: "Most Hispanics", groupName: "Racial Composition", key:"hispanic" },
  { title: "Most Asian", groupName: "Racial Composition", asian:true, key:"asian" },
];


export const buildings = [
  {title: "2 Bedroom Self Contain", location: "14 Spruce St, Foxboro, MA 02035", bedrooms: '2', baths: '1', size: "3,123", town_id: "50100100", image: "https://i.insider.com/5b75a356e199f336008b528b?width=1300&format=jpeg&auto=webp"},
  {title: "Mountain top Contain", location: "Bedrock. 17 pipe Street", bedrooms: '4', baths: '2', size: "1,023", town_id: "50100100", image: "https://ssl.cdn-redfin.com/photo/rent/609de268-4642-4d17-9dcb-327c12097753/islphoto/genIsl.0_1.jpg"},
  {title: "2 Bedroom Self Contain", location: "14 Spruce St, Foxboro, MA 02035", bedrooms: '2', baths: '1', size: "3,123", town_id: "50100484", image: "https://i.insider.com/5b75a356e199f336008b528b?width=1300&format=jpeg&auto=webp"},
  {title: "Mountain top Contain", location: "Bedrock. 17 pipe Street", bedrooms: '4', baths: '2', size: "1,023", town_id: "50100124", image: "https://ssl.cdn-redfin.com/photo/rent/609de268-4642-4d17-9dcb-327c12097753/islphoto/genIsl.0_1.jpg"}
]