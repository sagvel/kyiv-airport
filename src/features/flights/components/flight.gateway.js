const BASE_URL = 'https://api.iev.aero/api/flights';

export const getFlightsData = url => {
  return fetch(`${BASE_URL}/${url}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
};
