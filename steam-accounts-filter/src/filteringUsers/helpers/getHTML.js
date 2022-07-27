const axios = require('axios');
const cheerio = require('cheerio');

async function getHTML(url) {
  const { data } = await axios.get(url);
  return cheerio.load(data);
}

module.exports = getHTML;
