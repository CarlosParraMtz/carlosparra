import ButtonRight from "../elements/ButtonRight"
import ButtonLeft from "../elements/ButtonLeft"

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <div className="centered">

                <h1>Web developer portfolio</h1>
                <div className="container-content">
                    p
                </div>
            </div>


            <ButtonLeft link="/" title="Home" />
            <ButtonRight link="/contact" title="Contact" />

        </section>
    )
}
