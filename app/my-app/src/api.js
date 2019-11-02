export function displayCities(){
  let url = "http://localhost:8000/cities";
  return fetch(url)
         .then(data => data.json());
}

export function displayAirports(){
  let url="http://localhost:8000/airports";
  return fetch(url)
  .then(data => data.json());
}