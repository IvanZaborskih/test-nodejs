import axios from 'axios';

const defaultOptions = {
	baseURL: 'https://morning-everglades-88535.herokuapp.com/api',
};

let instance = axios.create(defaultOptions);

export default instance;
