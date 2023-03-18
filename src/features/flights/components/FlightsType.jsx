import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsActions from './flights.actions';
import { flightsDataSelector } from './flights.selectors';
import moment from 'moment';

const FlightsType = ({ flightDataFetching, flights, calendarDate, searchFlights, pathname }) => {
  const date = moment(calendarDate).format('DD-MM-YYYY');
  console.log(date);
  useEffect(() => {
    console.log('effect launch');
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

  // console.log(body[`${path}`]);
  console.log(body);
  const flightsForRender = body[`${path}`].filter(fligth =>
    fligth.codeShareData[0].codeShare.includes(searchFlights.toUpperCase()),
  );

  // console.log(flights);

  return (
    <table className="result-table">
      <thead>
        <tr>
          <th className="terminal">Terninal</th>
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
                <td className="terminal__letter">{flight.term}</td>
                <td>{moment(flight.timeDepShedule).format('H:mm')}</td>
                <td>{flight['airportToID.city_en']}</td>
                <td>Departed at {moment(flight.timeDepFact).format('H:mm')}</td>
                <td className="airline-info">
                  <img className="airline-logo" src={flight.airline.en.logoName} />{' '}
                  {flight.airline.en.name}
                </td>
                <td>{flight.codeShareData[0].codeShare}</td>
              </tr>
            ))
          : flightsForRender.map(flight => (
              <tr key={flight.ID}>
                <td className="terminal__letter">{flight.term}</td>
                <td>{moment(flight.timeArrShedule).format('H:mm')}</td>
                <td>{flight['airportFromID.city_en']}</td>
                <td>Landed {moment(flight.timeArrExpectCalc).format('H:mm')}</td>
                <td>
                  <img className="airline-logo" src={flight.airline.en.logoName} />{' '}
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
