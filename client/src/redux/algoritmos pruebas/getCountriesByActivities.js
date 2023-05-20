const showCountries = [
  {
    id: "ATA",
    name: "Antarctica",
    flags: "https://flagcdn.com/w320/aq.png",
    continent: "Antarctica",
    capital: "Undefined capital city",
    subregion: "Undefined subregion",
    area: 14000000,
    population: 1000,
  },
  {
    id: "MEX",
    name: "Mexico",
    flags: "https://flagcdn.com/w320/mx.png",
    continent: "North America",
    capital: "Mexico City",
    subregion: "North America",
    area: 1964375,
    population: 128932753,
  },
  {
    id: "TCA",
    name: "Turks and Caicos Islands",
    flags: "https://flagcdn.com/w320/tc.png",
    continent: "North America",
    capital: "Cockburn Town",
    subregion: "Caribbean",
    area: 948,
    population: 38718,
  },
  {
    id: "ALA",
    name: "Åland Islands",
    flags: "https://flagcdn.com/w320/ax.png",
    continent: "Europe",
    capital: "Mariehamn",
    subregion: "Northern Europe",
    area: 1580,
    population: 29458,
  },
  {
    id: "PAK",
    name: "Pakistan",
    flags: "https://flagcdn.com/w320/pk.png",
    continent: "Asia",
    capital: "Islamabad",
    subregion: "Southern Asia",
    area: 881912,
    population: 220892331,
  },
  {
    id: "RUS",
    name: "Russia",
    flags: "https://flagcdn.com/w320/ru.png",
    continent: "Europe",
    capital: "Moscow",
    subregion: "Eastern Europe",
    area: 17098242,
    population: 144104080,
  },
  {
    id: "BDI",
    name: "Burundi",
    flags: "https://flagcdn.com/w320/bi.png",
    continent: "Africa",
    capital: "Gitega",
    subregion: "Eastern Africa",
    area: 27834,
    population: 11890781,
  },
  {
    id: "COK",
    name: "Cook Islands",
    flags: "https://flagcdn.com/w320/ck.png",
    continent: "Oceania",
    capital: "Avarua",
    subregion: "Polynesia",
    area: 236,
    population: 18100,
  },
  {
    id: "IRN",
    name: "Iran",
    flags: "https://flagcdn.com/w320/ir.png",
    continent: "Asia",
    capital: "Tehran",
    subregion: "Southern Asia",
    area: 1648195,
    population: 83992953,
  },
  {
    id: "USA",
    name: "United States",
    flags: "https://flagcdn.com/w320/us.png",
    continent: "North America",
    capital: "Washington, D.C.",
    subregion: "North America",
    area: 9372610,
    population: 329484123,
  },
  {
    id: "VUT",
    name: "Vanuatu",
    flags: "https://flagcdn.com/w320/vu.png",
    continent: "Oceania",
    capital: "Port Vila",
    subregion: "Melanesia",
    area: 12189,
    population: 307150,
  },
];

const allActivities = [
  {
    id: 1,
    name: "Parapente",
    difficulty: 3,
    duration: 2,
    season: "Autum/Fall",
    countries: [
      {
        name: "Gibraltar",
      },
      {
        name: "Peru",
      },
      {
        name: "Venezuela",
      },
    ],
  },
  {
    id: 2,
    name: "Sky",
    difficulty: 3,
    duration: 2.5,
    season: "Summer",
    countries: [
      {
        name: "Gibraltar",
      },
      {
        name: "Peru",
      },
      {
        name: "Venezuela",
      },
    ],
  },
  {
    id: 3,
    name: "Movie",
    difficulty: 3,
    duration: 2.7,
    season: "Summer",
    countries: [
      {
        name: "Iran",
      },
      {
        name: "United States",
      },
      {
        name: "Burundi",
      },
    ],
  },
  {
    id: 4,
    name: "Testing PostMan",
    difficulty: 3,
    duration: 2,
    season: "Winter",
    countries: [
      {
        name: "Gibraltar",
      },
      {
        name: "Peru",
      },
      {
        name: "Venezuela",
      },
    ],
  },
];

const activitySubmitted = "Movie";

//const countries = ["Iran", "United States", "Burundi"]

//const filteredCountry = showCountries.filter((country)=>countries.includes(country.name))

//console.log(filteredCountry)

const filteredActivity = allActivities.filter(
  (activity) => activity.name === activitySubmitted
);

console.log(filteredActivity);

const arrayCountries = filteredActivity[0].countries.map((country) =>
  Object.values(country)
);

console.log(arrayCountries);

console.log("Espacio");

unifiedCountries = [].concat(...arrayCountries);

const countriesByActivity = showCountries.filter((country) =>
  unifiedCountries.includes(country.name)
);

console.log(countriesByActivity);
