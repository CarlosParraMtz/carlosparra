import getPortfolio from '../../functions/getPortfolio';
import PortfolioPost from '../../components/pages/PortfolioPost';

export async function getStaticProps({ params }) {
    const posts = await getPortfolio();
    const post = posts.find(p => p.slug === params.slug);
    return {
        props: {
            data: post
        }
    }
}

export async function getStaticPaths() {
    const posts = await getPortfolio();
    return {
        paths: posts.map(p => ({ params: { slug: p.slug } })),
        fallback: false
    }
}

export default function slug({ data }) {
    return <PortfolioPost data={data} />
}