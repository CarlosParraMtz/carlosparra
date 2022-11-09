import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PortfolioCard({ data, i }) {
    return (
        <Link href={`/portfolio/${data.slug}`} >
            <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.8 + (0.1 * i) }}
                className="portfolio-card" style={{cursor:"pointer"}} >

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



            </motion.a>
        </Link>
    )
}
