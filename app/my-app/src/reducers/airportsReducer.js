function airportsReducer(state = { airportsList: [] }, action) {
    console.log("reducers=>airportsReducer");
    switch (action.type) {
        case 'DISPLAYING_AIRPORTS':
            return Object.assign({},state,{airportsList:action.airportsList});
            default:
            return state;
    }
}
export default airportsReducer;
