export default function SkillCard({file, titulo}) {
    return(
        <div className="skill-card" >
            <img src={`/images/icons/${file}.png`} alt={titulo} />
            <h3>{titulo}</h3>
        </div>
    )
}