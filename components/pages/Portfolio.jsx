import Chip from '../elements/Chip';

import SideButton from "../elements/SideButton";

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
                    {"Showing all my finished projects and the ones I'm working on."}
                </p>

            </div>


            <SideButton link="/" title="Home" left />
            <SideButton link="/contact" title="Contact" right />

        </section>
    )
}
