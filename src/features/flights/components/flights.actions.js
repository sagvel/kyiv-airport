import { getFlightsData } from './flight.gateway';

export const FLIGHTS_DATA_RECIEVED = 'FLIGHTS/FLIGHTS_DATA_RECIEVED';

export const flightDataRecieved = flightData => {
  return {
    type: FLIGHTS_DATA_RECIEVED,
    payload: {
      flightData,
    },
  };
};

export const flightDataFetching = (url) => {
  return function (dispatch) {
    getFlightsData(url).then(data => {
      dispatch(flightDataRecieved(data));
    });
  };
};
