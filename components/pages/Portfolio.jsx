import Chip from '../elements/Chip';

import ButtonRight from "../elements/ButtonRight";
import ButtonLeft from "../elements/ButtonLeft";

/* 
<div className="chips">
<Chip label="react" />
<Chip label="next" />
<Chip label="firebase" />
<Chip label="react" />
</div>
*/
export default function Portfolio() {
    return (
        <section id='portfolio'>
            <div className="centered">
                <h1>Web developer portfolio</h1>

                <p>
                    Showing all my finished projects and the ones I'm working on.
                </p>

            </div>


            <ButtonLeft link="/" title="Home" />
            <ButtonRight link="/contact" title="Contact" />

        </section>
    )
}
