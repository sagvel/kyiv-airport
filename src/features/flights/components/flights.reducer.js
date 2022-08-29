import { FLIGHTS_DATA_RECIEVED } from './flights.actions';

const initialState = {
  flightsData: {},
};

export const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FLIGHTS_DATA_RECIEVED:
      return {
        ...state,
        flightsData: action.payload.flightData,
      };
    default:
      return state;
  }
};
