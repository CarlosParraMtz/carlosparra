//* Components
import SideButton from "../elements/SideButton";
import PortfolioCard from "../elements/PortfolioCard";
import Link from 'next/link';
import Image from 'next/image';
import ButtonsPair from "../elements/ButtonsPair";

/* 
<div className="chips">
<Chip label="react" />
<Chip label="next" />
<Chip label="firebase" />
<Chip label="react" />
</div>
*/
export default function Portfolio({ data }) {

    return (
        <section id='portfolio'>
            <div className="centered">
                <h1>Web developer portfolio</h1>

                <p>
                    {"Showing all my finished projects and the ones I'm working on."}
                </p>

                <div className="portfolio-container" >
                    {
                        data.map((d, i) => <PortfolioCard data={d} key={i} />)
                    }
                </div>

            </div>




            <ButtonsPair
                left={{ link: "/", title: "Home" }}
                right={{ link: "/contact", title: "Contact" }}
            />


        </section>
    )
}
