import React from 'react';
import { connect } from "react-redux";

class Airports extends React.Component {
    render() {
        return <div className="container">
            {this.props.airportsList.length!=0 && 
            <div className="card mt-4" style={{ 'backgroundColor': 'white'}}>
                <ul className="card-header" style={{ 'color': 'white' }}>
                    {this.props.airportsList.map((item, i) =>
                        <li key={i.toString()} className="card-body rounded mx-auto d-block text-white bg-secondary my-2 p-3">
                           Airport Name : {item.airport_name}<br></br>
                           IATA Code : {item.IATA_code}<br></br>
                          ICAO_Code : {item.ICAO_code}
                        </li>
                    )}
                </ul> 
            </div> 
            }
        </div>
    }
}

function mapStateToProps(state) {
    return { airportsList: state.airportsReducer.airportsList };
}

export default connect(mapStateToProps)(Airports);