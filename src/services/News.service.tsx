import { INewsInterface } from '../core/interfaces/INewsInterface';
import { api } from './api';
import {defaultHost, apiKey} from '../../app.json';
const moment = require("moment");

const URL_TOPHEADLINES_BR = '/top-headlines?country=br'
const URL_EVERYTHING = `/everything?q=`

export const getTopHeadLines = async (category?: string) => {
    let url = `${URL_TOPHEADLINES_BR}&apiKey=${apiKey}`;
    category ? url = url + `&category=${category}` : null
    return await api.get(url);
}

export const getEverything = async (search: string) => {
    let dateNow = moment().format("YYYY-MM-DD");
    return await api.get(`/everything?q=${search}&from=${dateNow}&apiKey=${apiKey}`)  
}