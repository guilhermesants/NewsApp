import axios from 'axios';
const cheerio = require('cheerio');

export const getNewsDetails = async (url: string) => {
    const { data } = await axios.get(url);

    const $ = cheerio.load(data);
    const dados = $('p').text()
    return dados;
}