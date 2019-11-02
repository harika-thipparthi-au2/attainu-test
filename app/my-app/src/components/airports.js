import React from 'react';
import { connect } from "react-redux";

class Airports extends React.Component {
    render() {
        return <div className="container">
            <div className="card" style={{ 'backgroundColor': '#E0FFFF', }}>
                <ul className="card-header" style={{ 'color': 'navy' }}>
                {/* {this.props.airportsList.length > 0 && this.props.reposList[0].owner.login} */}
                    {this.props.airportsList.map((item, i) =>
                        <li key={i.toString()} className="card-body rounded mx-auto d-block text-white bg-secondary my-2 p-3">
                            {item.airport_name}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return { airportsList: state.airportsReducer.airportsList };
}

export default connect(mapStateToProps)(Airports);