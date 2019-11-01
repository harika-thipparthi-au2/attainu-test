import React from 'react';
import { connect } from "react-redux";
import { displayingCities} from "../actions/citiesAction";
import { displayCities} from '../api';



class Cities extends React.Component{
   
    componentDidMount() {
        this.props.getCitiesList();
    }

    render(){
        return(
            <div className="container">
                <ul className="card-deck">
                    {this.props.citiesList.map((item, i) =>
                        <li key={i.toString()} className="card text-white bg-secondary mb-4 p-3">
                            <div className="card-body text-center">
                                <h6 className="card-title">{item.cities}</h6>
                            </div>

                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("mapStatetoProps");
    return {
        citiesList: state.citiesReducer.citiesList};
  }

  function mapActionToProps(dispatch) {
    return {
        getCitiesList: function () {
            displayCities()
                .then(result => dispatch(displayingCities(result)))
                ;
        }

    
    }
}

export default connect(mapStateToProps, mapActionToProps)(Cities);

