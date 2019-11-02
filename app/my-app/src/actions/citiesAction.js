export function displayingCities(result) {
    console.log("action:DISPLAYING_CITIES");
    return {
        type: 'DISPLAYING_CITIES',
        citiesList: result.cities
       
    };
};


export function displayingAirports(result) {
    console.log("action:DISPLAYING_AIRPORTS");
    return {
        type: 'DISPLAYING_AIRPORTS',
        airportsList:result
       
    };
}

