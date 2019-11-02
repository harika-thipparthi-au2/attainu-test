function citiesReducer(state = { citiesList: [] }, action) {
    console.log("reducers=>citiesReducer");
    switch (action.type) {
        case 'DISPLAYING_CITIES':
            return Object.assign({},state,{citiesList:action.citiesList});
            default:
            return state;
    }
}

export default citiesReducer;



