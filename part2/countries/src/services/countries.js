import Axios from 'axios';

const BASEURL = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
  const request = Axios.get(BASEURL);
  return request.then(response => response.data);
}

export default { getAll };