import axios from 'axios'

export default async function getPortfolio() {
    let posts = await axios.get("https://cdn.contentful.com/spaces/5pd51gqcii3b/entries?access_token=M_mS18camC-Shke9OiX3HXWjZKVdEzyoN8cpJpgC9io")
        .then(res => (res.data.items.map(item => item.fields)))
    return posts;
}