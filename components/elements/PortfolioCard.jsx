import Link from 'next/link';
import Image from 'next/image';

export default function PortfolioCard({ data }) {
    return (
        <Link href={`/portfolio/${data.slug}`} >
            <a className="portfolio-card">

                <div className="portfolio-card-title">
                    <div className="dots-container">
                        <div className=" dot dot-red" />
                        <div className="dot dot-orange" />
                        <div className=" dot dot-green" />
                    </div>
                    <p className="portfolio-title">
                        <b> {data.projectName} </b>
                    </p>
                </div>

                <div className="portfolio-img-container">
                    <Image
                        className="portfolio-img-cover"
                        src={`/portfolio/${data.thumbnail}`}
                        alt=""
                        fill
                        layout="fill"
                    />
                </div>


                <div className="portfolio-card-hover-content">
                    <span>
                        <b> {data.projectName} </b>
                    </span>
                </div>



            </a>
        </Link>
    )
}
