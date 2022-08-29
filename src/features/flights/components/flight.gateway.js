const BASE_URL = 'https://api.iev.aero/api/flights/11-01-2022';

export const getFlightsData = () => {
  return fetch(BASE_URL).then(response => {
    if (!response.ok) {
      throw new Error();
    }

    return response.json();
  });
};
