import axios from 'axios';
import {defaultHost, apiKey} from '../../app.json';

export const api = axios.create({
    baseURL: defaultHost
});
