// Show h5 as current time
let time = document.querySelector("h5");
let date = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = date.getDay();
function showTime() {
  let today = days[day];
  let hour = date.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  time.innerHTML = `${today} ${hour}:${minutes}`;
}
showTime();

//Show days
function showDays() {
  let length = days.length;
  document.querySelector("#tomorrow").innerHTML =
    days[((day % length) + 1) % length];
  document.querySelector("#dayAfterTomorrow").innerHTML =
    days[((day % length) + 2) % length];
  document.querySelector("#twoDaysAfterTomorrow").innerHTML =
    days[((day % length) + 3) % length];
  document.querySelector("#threeDaysAfterTomorrow").innerHTML =
    days[((day % length) + 4) % length];
  document.querySelector("#fourDaysAfterTomorrow").innerHTML =
    days[((day % length) + 5) % length];
}
showDays();

//show real-time data before searching
let apiKey = "9bddfe976dc4f376a89a3a80eb610e24";
function search(city) {
  showCurrentWeather(city);
  showForecastINsearchedCity(city);
}
search("Madrid");

//Show h1 as searched city
let city = document.querySelector("h1");
let form = document.querySelector("form");
let temperature = document.querySelector(".temperature");
function showCity(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#search-input");
  searchedCity = searchedCity.value;
  showCurrentWeather(searchedCity);
  showForecastINsearchedCity(searchedCity);
}
form.addEventListener("submit", showCity);

function showCurrentWeather(searchedCity) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTodayWeather);
}

//5 day forecast
function showForecastINsearchedCity(searchedCity) {
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showForecast);
}

//show today`s weather
let humidity = document.querySelector("span.current-humidity");
let wind = document.querySelector("span.current-wind");
let h4 = document.querySelector("h4");

function showTodayWeather(response) {
  let place = allCountries[response.data.sys.country];
  city.innerHTML = `${response.data.name}, ${place}`;
  if (place.length > 10) city.style.fontSize = "32px";
  temperature.innerHTML = Math.round(response.data.main.temp);
  h4.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
}

//show temperature in my current location
let myLocation = document.querySelector("#location");
function showWeatherInMyLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  let url2 = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(url2).then(showForecast); //not working
  axios.get(url).then(showTodayWeather);
}

function activateButton() {
  navigator.geolocation.getCurrentPosition(showWeatherInMyLocation);
}

myLocation.addEventListener("click", activateButton);

//animations //not working!!!
let animation = document.querySelector("lottie-player");
console.log(animation);
let source = animation.src;
function changeAnimation() {
  animation.setAttribute(
    "src",
    "https://assets1.lottiefiles.com/datafiles/5mP0vh2UJOqS1DG/data.json"
  );
}
changeAnimation();
console.log(animation);

function showForecast(response) {
  weatherEmoji = {
    Thunderstorm: "⛈️",
    Drizzle: "🌦️",
    Rain: "🌧️",
    Snow: "❄️",
    Mist: "🌫️",
    Smoke: "🌫️",
    Haze: "🌫️",
    Dash: "🌫️",
    Fog: "🌫️",
    Sand: "🌫️",
    Ash: "🌋",
    Squall: "💨",
    Tornado: "🌪️",
    Clear: "☀️",
    Clouds: "☁️",
  };
  document.querySelector("#tomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.list[6].weather[0].main];
  document.querySelector("#dayAfterTomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.list[14].weather[0].main];
  document.querySelector("#twoDaysAfterTomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.list[22].weather[0].main];
  document.querySelector("#threeDaysAfterTomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.list[30].weather[0].main];
  document.querySelector("#fourDaysAfterTomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.list[38].weather[0].main];

  document.querySelector("#tomorrowT").innerHTML = `${Math.round(
    response.data.list[6].main.temp_max
  )}/${Math.round(response.data.list[9].main.temp_min)} °C`;
  document.querySelector("#dayAfterTomorrowT").innerHTML = `${Math.round(
    response.data.list[14].main.temp_max
  )}/${Math.round(response.data.list[17].main.temp_min)} °C`;
  document.querySelector("#twoDaysAfterTomorrowT").innerHTML = `${Math.round(
    response.data.list[22].main.temp_max
  )}/${Math.round(response.data.list[25].main.temp_min)}°C`;
  document.querySelector("#threeDaysAfterTomorrowT").innerHTML = `${Math.round(
    response.data.list[30].main.temp_max
  )}/${Math.round(response.data.list[33].main.temp_min)}°C`;
  document.querySelector("#fourDaysAfterTomorrowT").innerHTML = `${Math.round(
    response.data.list[36].main.temp_max
  )}/${Math.round(response.data.list[39].main.temp_min)}°C`;
}

//rome (UNited states of America) -> Rome, Italy

allCountries = {
  AF: "Afghanistan",
  AL: "Albania",
  DZ: "Algeria",
  AS: "Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua and Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BQ: "Bonaire",
  BA: "Bosnia and Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina",
  BI: "Burundi",
  CV: "Cabo Verde",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  Chad: "TD",
  CN: "China",
  CL: "Chile",
  CX: "Christmas Island",
  CC: "Cocos Islands",
  C: "Colombia",
  KM: "Comoros",
  CD: "Congo",
  CG: "Congo",
  CK: "Cook Islands",
  CR: "Costa Rica",
  HR: "Croatia",
  CU: "Cuba",
  CW: "Curaçao",
  CY: "Cyprus",
  CZ: "Czechia",
  CI: "Côte d'Ivoire",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  SZ: "Eswatini",
  ET: "Ethiopia",
  FK: "Falkland Islands",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island and McDonald Islands",
  VA: "Vatican",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KP: "South-Korea",
  KR: "North-Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestine",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  MK: "Macedonia",
  RO: "Romania",
  RU: "Russia",
  RW: "Rwanda",
  RE: "Réunion",
  BL: "Saint Barthélemy",
  SH: "Saint Helena",
  KN: "Saint Kitts and Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre and Miquelon",
  VC: "Saint Vincent and the Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome and Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SX: "Sint Maarten",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia and the South Sandwich Islands",
  SS: "South Sudan",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard and Jan Mayen",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad and Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks and Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  UM: "Minor Outlying Islands",
  US: "United States of America",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands",
  VI: "Virgin Islands",
  WF: "Wallis and Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
  AX: "Åland Islands",
};
