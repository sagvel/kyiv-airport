import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsActions from './flights.actions';
import { flightsDataSelector } from './flights.selectors';
import moment from 'moment';

const FlightsType = ({ flightDataFetching, flights, calendarDate, searchFlights, pathname }) => {
  const date = moment(calendarDate).format('DD-MM-YYYY');
  useEffect(() => {
    flightDataFetching(date);
  }, [date]);

  console.log(flights);

  if (!flights) {
    return <div>No fligths</div>;
  }
  const { body } = flights;
  const path = pathname.slice(1, -1);

  if (!body[`${path}`].length) {
    return <div>No fligths</div>;
  }

  console.log(body[`${path}`]);
  // console.log(body);
  const flightsForRender = body[`${path}`].filter(fligth =>
    fligth.codeShareData[0].codeShare.includes(searchFlights.toUpperCase()),
  );

  console.log(flights);

  return (
    <table className="result-table">
      <thead>
        <tr>
          <th>Terninal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight</th>
        </tr>
      </thead>
      <tbody>
        {path === 'departure'
          ? flightsForRender.map(flight => (
              <tr key={flight.ID}>
                <td>{flight.term}</td>
                <td>{flight.timeDepShedule}</td>
                <td>{flight['airportToID.city_en']}</td>
                <td></td>
                <td>
                  <img className="airline-logo" src={flight.airline.en.logoName} />
                  {flight.airline.en.name}
                </td>
                <td>{flight.codeShareData[0].codeShare}</td>
              </tr>
            ))
          : flightsForRender.map(flight => (
              <tr key={flight.ID}>
                <td>{flight.term}</td>
                <td>{flight.timeArrShedule}</td>
                <td>{flight['airportFromID.city_en']}</td>
                <td></td>
                <td>
                  <img className="airline-logo" src={flight.airline.en.logoName} />
                  {flight.airline.en.name}
                </td>
                <td>{flight.codeShareData[0].codeShare}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
};

const mapState = state => {
  return {
    flights: flightsDataSelector(state),
  };
};

const mapDispatch = {
  flightDataFetching: flightsActions.flightDataFetching,
};

export default connect(mapState, mapDispatch)(FlightsType);
