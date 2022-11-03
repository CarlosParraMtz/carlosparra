import ButtonRight from "../elements/ButtonRight"
export default function Inicio() {
    return (
        <section id='portada' >
            <div style={{ maxWidth: "420px" }} >
                <h1>
                    <b>Hello! My name is Carlos Parra</b>.
                </h1>
                <p>
                    I'm a frontend web developer, graphic designer and
                    UI / UX specialist. Feel free to take a look at my
                    latest projects on the <a href="/portfolio"><b>web portfolio page</b>.</a>
                </p>
                <p>
                    Remotely avaliable at UTC-6.
                </p>
            </div>

            <ButtonRight link="/portfolio" title="Portfolio" />

        </section>
    )
}