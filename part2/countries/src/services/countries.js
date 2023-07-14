import Axios from 'axios';

const BASEURL = 'https://studies.cs.helsinki.fi/restcountries/api/all';

function getAll() {
  const request = Axios.get(BASEURL);
  const foundCountries = request.then((response) => response.data);
  return foundCountries;
}

export default { getAll };
