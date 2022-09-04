import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import SearchFlights from './SearchFlights';
import * as flightsActions from './flights.actions';
import { flightsDataSelector } from './flights.selectors';
import './styles.scss';

const Flights = ({ flightDataFetching, flights }) => {
  useEffect(() => {
    flightDataFetching();
  }, []);

  if (!flights) {
    return null;
  }

  console.log(flights.body);

  const { body } = flights;
  console.log(body);

  if (body) {
    console.log(body.departure);
  }

  // const { arrival } = body;

  // console.log(arrival);

  return (
    <>
      <h1>Search flight</h1>
      <SearchFlights />
      <div className="buttons">
        <button>Departures</button>
        <button>Arrivals</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <td>Terminal</td>
            <td>Local time</td>
            <td>Destination</td>
            <td>Status</td>
            <td>Airline</td>
            <td>Flight</td>
          </tr>
        </thead>
        <tbody>
          {body &&
            flights.body.departure.map(flight => (
              <tr key={flight.ID}>
                <td>{flight.term}</td>
                <td>{flight.timeBoard}</td>
                <td>{flight['airportToID.city_en']}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
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

export default connect(mapState, mapDispatch)(Flights);
