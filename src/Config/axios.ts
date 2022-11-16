import axios from 'axios';

import { API_URL } from './environmentalVariables';

export default axios.create({
	baseURL: API_URL,
	headers: {}
});
