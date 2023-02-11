let body = document.querySelector("body");
let time = document.querySelector("h2");
let apiKey = "9bddfe976dc4f376a89a3a80eb610e24";
let key = "5f472b7acba333cd8a035ea85a0d4d4c";
let humidity = document.querySelector("span.current-humidity");
let wind = document.querySelector("span.current-wind");
let h3 = document.querySelector("h3");
let animation = document.querySelector("lottie-player");
let currentCelsiusTemperature = null;
let feelsLikeCelsiusTemperature = null;
let tomorrowCelsiusTemperatureMin = null;
let tomorrowCelsiusTemperatureMax = null;
let dayAfterTomorrowCelsiusTemperatureMin = null;
let dayAfterTomorrowCelsiusTemperatureMax = null;
let twoDaysAfterTomorrowCelsiusTemperatureMin = null;
let twoDaysAfterTomorrowCelsiusTemperatureMax = null;
let threeDaysAfterTomorrowCelsiusTemperatureMin = null;
let threeDaysAfterTomorrowCelsiusTemperatureMax = null;
let fourDaysAfterTomorrowCelsiusTemperatureMin = null;
let fourDaysAfterTomorrowCelsiusTemperatureMax = null;
let city = document.querySelector("h1");
let form = document.querySelector("form");
let temperature = document.querySelector(".temperature");
let feelsLikeTemperature = document.querySelector("#feels");
let date = new Date();
let day = date.getDay();
let hour = date.getHours();
let F = document.querySelector("#fahrenheit");
let C = document.querySelector("#celsius");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let length = days.length;
let allCountries = {
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
  TD: "Chad",
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
let timezones = {
  "-43200": "-12",
  "-39600": "-11",
  "-36000": "-10",
  "-34200": "-9.5",
  "-32400": "-9",
  "-28800": "-8",
  "-25200": "-7",
  "-21600": "-6",
  "-18000": "-5",
  "-16200": "-4.5",
  "-14400": "-4",
  "-12600": "-3.5",
  "-10800": "-3",
  "-7200": "-2",
  "-3600": "-1",
  0: "0",
  3600: "1",
  7200: "2",
  10800: "3",
  12600: "3.5",
  14400: "4",
  16200: "4.5",
  18000: "5",
  19800: "5.5",
  20700: "5.75",
  21600: "6",
  23400: "6.5",
  25200: "7",
  28800: "8",
  32400: "9",
  34200: "9.5",
  36000: "10",
  37800: "10.5",
  39600: "11",
  41400: "11.5",
  43200: "12",
  45900: "12.75",
  46800: "13",
  50400: "14",
};
let weatherAnimations = {
  thunderstorm: "https://assets2.lottiefiles.com/temp/lf20_Kuot2e.json",
  "thunderstorm with rain":
    "https://assets5.lottiefiles.com/temp/lf20_XkF78Y.json",
  "thunderstorm with light rain":
    "https://assets8.lottiefiles.com/temp/lf20_JA7Fsb.json",
  rain: "https://assets9.lottiefiles.com/packages/lf20_bco9p3ju.json",
  "moderate rain":
    "https://assets9.lottiefiles.com/packages/lf20_bco9p3ju.json",
  "heavy intensity rain":
    "https://assets3.lottiefiles.com/packages/lf20_1yosmlv4.json",
  snow: "https://assets7.lottiefiles.com/temp/lf20_WtPCZs.json",
  "light snow": "https://assets7.lottiefiles.com/temp/lf20_WtPCZs.json",
  mist: "https://assets9.lottiefiles.com/temp/lf20_kOfPKE.json",
  "few clouds": "https://assets6.lottiefiles.com/packages/lf20_64okjrr7.json",
  "scattered clouds":
    "https://assets6.lottiefiles.com/packages/lf20_64okjrr7.json",
  "overcast clouds": "https://assets3.lottiefiles.com/temp/lf20_VAmWRg.json",
  "broken clouds": "https://assets3.lottiefiles.com/temp/lf20_VAmWRg.json",
  "shower rain": "https://assets4.lottiefiles.com/temp/lf20_rpC1Rd.json",
  "light rain": "https://assets4.lottiefiles.com/temp/lf20_rpC1Rd.json",
  "clear sky": "https://assets8.lottiefiles.com/temp/lf20_Stdaec.json",
  night: "https://assets9.lottiefiles.com/temp/lf20_Jj2Qzq.json",
  random: "https://assets8.lottiefiles.com/packages/lf20_7lk7qauk.json",
};
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

//show real-time data before searching
function search(city) {
  showCurrentWeather(city);
}
search("Ljubljana");

//submit
function handleSubmit(event) {
  event.preventDefault();
  let searchedCity = document.querySelector("#search-input");
  searchedCity = searchedCity.value;
  search(searchedCity);
}
form.addEventListener("submit", handleSubmit);

function showCurrentWeather(searchedCity) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTodayWeather);
}

//show today`s weather
function showTodayWeather(response) {
  let timezone = response.data.timezone;
  function getLocalTime() {
    let timeZoneOffset = date.getTimezoneOffset();
    let offsetHours = -timeZoneOffset / 60;
    let TZ = timezones[timezone];
    let local = TZ - offsetHours;
    let adjustedTime = new Date(date.getTime() + local * 3600 * 1000);
    let weekDay = adjustedTime.getDay();
    let localDay = days[adjustedTime.getDay()];
    let localHour = adjustedTime.getHours();
    if (localHour < 10) {
      localHour = "0" + localHour;
    }
    let localMinutes = adjustedTime.getMinutes();
    if (localMinutes < 10) {
      localMinutes = "0" + localMinutes;
    }

    if (localHour > 20 || localHour < 7) {
      animation.load(weatherAnimations["night"]);
    } else {
      changeAnimation();
    }
    time.innerHTML = `${localDay} ${localHour}:${localMinutes}`;
    document.querySelector("#tomorrow").innerHTML =
      days[((weekDay % length) + 1) % length];
    document.querySelector("#dayAfterTomorrow").innerHTML =
      days[((weekDay % length) + 2) % length];
    document.querySelector("#twoDaysAfterTomorrow").innerHTML =
      days[((weekDay % length) + 3) % length];
    document.querySelector("#threeDaysAfterTomorrow").innerHTML =
      days[((weekDay % length) + 4) % length];
    document.querySelector("#fourDaysAfterTomorrow").innerHTML =
      days[((weekDay % length) + 5) % length];
  }
  let location = allCountries[response.data.sys.country];
  function showCityAndCountry() {
    if (location === undefined) {
      city.innerHTML = response.data.name;
    }
    if (location === response.data.name) {
      city.innerHTML = response.data.name;
    } else {
      city.innerHTML = `${response.data.name}, ${location}`;
    }
    if (location.length > 10) {
      city.style.fontSize = "22px";
    } else {
      city.style.fontSize = "30px";
    }
  }
  currentCelsiusTemperature = Math.round(response.data.main.temp);
  temperature.innerHTML = currentCelsiusTemperature;
  feelsLikeCelsiusTemperature = Math.round(response.data.main.feels_like);
  feelsLikeTemperature.innerHTML = feelsLikeCelsiusTemperature;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  h3.innerHTML = response.data.weather[0].description;
  function changeAnimation() {
    if (weatherAnimations[response.data.weather[0].description] === undefined) {
      animation.load(weatherAnimations["random"]);
    } else {
      animation.load(weatherAnimations[response.data.weather[0].description]);
    }
  }

  showCityAndCountry();
  getLocalTime();
  getForecast(`${response.data.coord.lat}`, `${response.data.coord.lon}`);
}

//show temperature in my current location
let myLocation = document.querySelector("#location");
function showWeatherInMyLocation(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showTodayWeather);
  getForecast(latitude, longitude);
  //axios.get(forecastURL).then(showForecast);
}

function activateButton() {
  navigator.geolocation.getCurrentPosition(showWeatherInMyLocation);
}

myLocation.addEventListener("click", activateButton);

function getForecast(lat, lon) {
  let forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  axios.get(forecastURL).then(showForecast);
}
function showForecast(response) {
  document.querySelector("#tomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.daily[1].weather[0].main];
  document.querySelector("#dayAfterTomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.daily[2].weather[0].main];
  document.querySelector("#twoDaysAfterTomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.daily[3].weather[0].main];
  document.querySelector("#threeDaysAfterTomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.daily[4].weather[0].main];
  document.querySelector("#fourDaysAfterTomorrowEMOJI").innerHTML =
    weatherEmoji[response.data.daily[5].weather[0].main];

  tomorrowCelsiusTemperatureMin = `${Math.round(
    response.data.daily[1].temp.min
  )}° / `;
  tomorrowCelsiusTemperatureMax = `${Math.round(
    response.data.daily[1].temp.max
  )}°`;
  document.querySelector("#tomorrowMin").innerHTML =
    tomorrowCelsiusTemperatureMin;
  document.querySelector("#tomorrowMax").innerHTML =
    tomorrowCelsiusTemperatureMax;

  dayAfterTomorrowCelsiusTemperatureMin = `${Math.round(
    response.data.daily[2].temp.min
  )}° / `;
  dayAfterTomorrowCelsiusTemperatureMax = `${Math.round(
    response.data.daily[2].temp.max
  )}°`;
  document.querySelector("#dayAfterTomorrowMin").innerHTML =
    dayAfterTomorrowCelsiusTemperatureMin;
  document.querySelector("#dayAfterTomorrowMax").innerHTML =
    dayAfterTomorrowCelsiusTemperatureMax;

  twoDaysAfterTomorrowCelsiusTemperatureMin = `${Math.round(
    response.data.daily[3].temp.min
  )}° / `;
  twoDaysAfterTomorrowCelsiusTemperatureMax = `${Math.round(
    response.data.daily[3].temp.max
  )}°`;
  document.querySelector("#twoDaysAfterTomorrowMin").innerHTML =
    twoDaysAfterTomorrowCelsiusTemperatureMin;
  document.querySelector("#twoDaysAfterTomorrowMax").innerHTML =
    twoDaysAfterTomorrowCelsiusTemperatureMax;

  threeDaysAfterTomorrowCelsiusTemperatureMin = `${Math.round(
    response.data.daily[4].temp.min
  )}° / `;
  threeDaysAfterTomorrowCelsiusTemperatureMax = `${Math.round(
    response.data.daily[4].temp.max
  )}°`;
  document.querySelector("#threeDaysAfterTomorrowMin").innerHTML =
    threeDaysAfterTomorrowCelsiusTemperatureMin;
  document.querySelector("#threeDaysAfterTomorrowMax").innerHTML =
    threeDaysAfterTomorrowCelsiusTemperatureMax;

  fourDaysAfterTomorrowCelsiusTemperatureMin = `${Math.round(
    response.data.daily[5].temp.min
  )}° / `;
  fourDaysAfterTomorrowCelsiusTemperatureMax = `${Math.round(
    response.data.daily[5].temp.max
  )}°`;
  document.querySelector("#fourDaysAfterTomorrowMin").innerHTML =
    fourDaysAfterTomorrowCelsiusTemperatureMin;
  document.querySelector("#fourDaysAfterTomorrowMax").innerHTML =
    fourDaysAfterTomorrowCelsiusTemperatureMax;
}

//Fahrenheit conversion
function showTemperaturesInFahrenheit(event) {
  event.preventDefault();
  let currentFahrenheitTemperature = currentCelsiusTemperature * 1.8 + 32;
  let feelsLikeFahrenheitTemperature = feelsLikeCelsiusTemperature * 1.8 + 32;
  let tomorrowFahrenheitTemperature = tomorrowCelsiusTemperature * 1.8 + 32;
  temperature.innerHTML = Math.round(currentFahrenheitTemperature);
  feelsLikeTemperature.innerHTML = Math.round(feelsLikeFahrenheitTemperature);
  tomorrowT.innerHTML = Math.round(tomorrowFahrenheitTemperature);
  C.classList.add("notclicked");
  F.classList.remove("notclicked");
}

function showTemperature(event) {
  event.preventDefault();
  temperature.innerHTML = currentCelsiusTemperature;
  feelsLikeTemperature.innerHTML = feelsLikeCelsiusTemperature;
  tomorrowT.innerHTML = tomorrowCelsiusTemperature;
  dayAfterTomorrowT.innerHTML = dayAfterTomorrowCelsiusTemperature;
  twoDaysAfterTomorrowT.innerHTML = twoDaysAfterTomorrowCelsiusTemperature;
  threeDaysAfterTomorrowT.innerHTML = threeDaysAfterTomorrowCelsiusTemperature;
  fourDaysAfterTomorrowT.innerHTML = fourDaysAfterTomorrowCelsiusTemperature;
  C.classList.remove("notclicked");
  F.classList.add("notclicked");
}

F.addEventListener("click", showTemperaturesInFahrenheit);
C.addEventListener("click", showTemperature);
