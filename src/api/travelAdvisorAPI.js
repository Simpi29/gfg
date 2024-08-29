/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
        tr_latitude: ne.lat,
      },
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    console.log('API response:', response);  // Log the full response to inspect it

    // Adjust this based on the actual response structure
    const data = response.data.data;

    if (Array.isArray(data)) {
      return data;
    } else {
      console.error('Data is not an array:', data);
      return [];
    }
  } catch (error) {
    console.error('Error fetching places data:', error);
    return [];  // Return an empty array if there is an error
  }
};
