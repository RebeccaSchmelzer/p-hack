const cheerio = require('cheerio')
const axios = require('axios')

async function performScraping () {
    const axiosRes = await axios.request({
        method: 'GET',
        url: 'https://www.canadahelps.org/en/donate-to-lgbtq-charities/',
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        }
    })
}

performScraping()