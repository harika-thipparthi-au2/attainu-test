export function displayCities(){
  let url = "http://localhost:8000/cities";
  return fetch(url)
         .then(data => data.json());
}