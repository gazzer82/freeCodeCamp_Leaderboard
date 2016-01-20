import axios from 'axios';

export const FETCH_CAMPERS = 'FETCH_CAMPERS';

const FCC_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent'

export function fetchCampers(){
  const request = axios.get(FCC_URL);
  return {
    type: FETCH_CAMPERS,
    payload: request
  };
}
