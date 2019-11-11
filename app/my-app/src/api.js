export function displayCities(){
  let url = "http://localhost:8000/cities";
  return fetch(url)
         .then(data => data.json());
}

export function displayAirports(cityName){
  let url="http://localhost:8000/airports?city="+cityName;
  return fetch(url)
  .then(data => data.json());
}