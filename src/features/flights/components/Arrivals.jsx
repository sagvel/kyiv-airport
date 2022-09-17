import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsActions from './flights.actions';
import { flightsDataSelector } from './flights.selectors';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

const Arrivals = ({ flightDataFetching, flights, calendarDate, searchFlights }) => {
  const date = moment(calendarDate).format('DD-MM-YYYY');
  useEffect(() => {
    flightDataFetching(date);
  }, []);

  if (!flights) {
    return null;
  }
  const { body } = flights;

  const arrivals = body.arrival.filter(fligth =>
    fligth.codeShareData[0].codeShare.includes(searchFlights.toUpperCase()),
  );
  console.log(body);
  return (
    <>
      {arrivals.map(flight => (
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
      ;
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

export default connect(mapState, mapDispatch)(Arrivals);
