import axios from 'axios'

export default async function getPortfolio() {
    return await axios.get(`https://cdn.contentful.com/spaces/${process.env.CF_PORTFOLIO_SPACE}/entries?access_token=${process.env.CF_PORTFOLIO_ACCESSTOKEN}`)
        .then(res => (res.data.items.map(item => item.fields)));
}