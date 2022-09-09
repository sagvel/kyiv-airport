import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as flightsActions from './flights.actions';
import { flightsDataSelector } from './flights.selectors';
import moment from 'moment';

const Departures = ({ flightDataFetching, flights, calendarDate }) => {
  const date = moment(calendarDate).format('DD-MM-YYYY');
  useEffect(() => {
    console.log('render Departures');
    flightDataFetching(date);
  }, [date]);

  if (!flights) {
    return null;
  }

  const { body } = flights;
  console.log(body);
  return (
    <>
      {body.departure.map(flight => (
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

export default connect(mapState, mapDispatch)(Departures);
