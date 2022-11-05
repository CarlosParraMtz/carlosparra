import Portfolio from "../components/pages/Portfolio"
import getPortfolio from "../functions/getPortfolio"

export async function getStaticProps() {
    let portfolio = await getPortfolio();
    return {
        props: { portfolio }
    }
}

export default function portfolio({portfolio}) { return <Portfolio data={portfolio} /> }
