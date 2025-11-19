import axios from './axiosConfig';

const fetchAnimals = () => {
  return axios.get(`/animals`).then((r) => r.data);
};

export default fetchAnimals;
