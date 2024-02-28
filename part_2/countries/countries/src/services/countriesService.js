import axios from 'axios';

const baseUrl = 'https://restcountries.com/v3.1/name/';

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
};

const countriesService = {
    getAll,
    // create,
    // update,
    // remove
};

export default countriesService;