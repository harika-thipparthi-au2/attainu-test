import React from 'react';
import { connect } from "react-redux";
import { displayingCities,displayingAirports } from "../actions/citiesAction";
import { displayCities,displayAirports} from '../api';



class Cities extends React.Component {

    componentDidMount() {
        this.props.getCitiesList();
    }

    render() {
        return (
            <div className="container">
                <div className="input-group">

                    <select className="custom-select" id="inputGroupSelect04">
                        <option selected>Select city....</option>

                        {this.props.citiesList.map((item, i) =>
                            <option value="i">{item}</option>



                        )}
                    </select>
                    <button className="btn btn-info" onClick={this.props.handleClick}>Show Airports</button>

                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log("mapStatetoProps");
    console.log(state.citiesReducer.citiesList);
    return {
        citiesList: state.citiesReducer.citiesList
    };
}

function mapActionToProps(dispatch) {
    return {
        getCitiesList: function () {
            displayCities()
                .then(result => dispatch(displayingCities(result)))
                ;
        },
        handleClick: function(){
            displayAirports()
                .then(result => dispatch(displayingAirports(result)))
        }


    }
}

export default connect(mapStateToProps, mapActionToProps)(Cities);

