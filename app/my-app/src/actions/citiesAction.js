export function displayingCities(result) {
    console.log("action:DISPLAYING_CITIES");
    return {
        type: 'DISPLAYING_CITIES',
        usersList: result
       
    };
}